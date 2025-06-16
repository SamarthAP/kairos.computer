"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLiveAPIContext } from "@/app/contexts/LiveApiContext";
import { useScreenCapture } from "@/app/hooks/use-screen-capture";
import { AudioRecorder } from "@/app/lib/livestream/audio-recorder";
import { logger } from "@/app/lib/log";

interface WorkflowRecorderProps {
  onRecordingComplete: (blob: Blob) => void;
  onStateChange: (state: "idle" | "recording" | "complete") => void;
}

export function WorkflowRecorder({
  onRecordingComplete,
  onStateChange,
}: WorkflowRecorderProps) {
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamError, setStreamError] = useState<string | null>(null);
  const [isStreamStarting, setIsStreamStarting] = useState(false);
  const [screenCaptureBlobUrl, setScreenCaptureBlobUrl] = useState<
    string | null
  >(null);
  const screenCaptureBlobUrlRef = useRef<string | null>(null);
  const isStreamingRef = useRef(false);

  useEffect(() => {
    screenCaptureBlobUrlRef.current = screenCaptureBlobUrl;
  }, [screenCaptureBlobUrl]);

  useEffect(() => {
    isStreamingRef.current = isStreaming;
  }, [isStreaming]);

  const liveAPI = useLiveAPIContext();
  const audioRecorderRef = useRef<AudioRecorder | null>(null);
  const videoFrameCanvasRef = useRef<HTMLCanvasElement>(null);
  const videoProcessIntervalRef = useRef<number | null>(null);

  // Define cleanup function early as a ref so it can be used in callbacks
  const cleanupStreamingRef = useRef<(() => void) | null>(null);

  const screenCapture = useScreenCapture({
    onStop: (blobUrl: string, blob: Blob) => {
      logger.info("Screen capture stopped, cleaning up...");

      // Clean up LiveAPI connection if it's still active
      if (
        cleanupStreamingRef.current &&
        (liveAPI.connected || isStreamingRef.current)
      ) {
        logger.info("Cleaning up LiveAPI connection after screen capture stop");
        cleanupStreamingRef.current();
      }

      // Small delay to ensure cleanup completes before updating state
      setTimeout(() => {
        setScreenCaptureBlobUrl(blobUrl);
        setRecordedBlob(blob);
        onRecordingComplete(blob);
        onStateChange("complete");
      }, 100);
    },
  });

  const cleanupStreaming = useCallback(() => {
    logger.info("Running cleanupStreaming...");

    // Disconnect LiveAPI first
    if (liveAPI.connected) {
      liveAPI.disconnect();
    }

    // Only stop screen capture if it's still streaming
    if (screenCapture.isStreaming) {
      screenCapture.stop();
    }

    const recorder = audioRecorderRef.current;
    if (recorder) {
      logger.info("cleanupStreaming explicitly stopping audio recorder...");
      recorder.stop();
      audioRecorderRef.current = null;
    }

    if (videoProcessIntervalRef.current) {
      clearInterval(videoProcessIntervalRef.current);
      videoProcessIntervalRef.current = null;
    }

    setIsStreaming(false);
    setStreamError(null);
    setIsStreamStarting(false);
  }, [liveAPI, screenCapture]);

  // Update the ref whenever cleanupStreaming changes
  useEffect(() => {
    cleanupStreamingRef.current = cleanupStreaming;
  }, [cleanupStreaming]);

  const handleStartStreaming = useCallback(async () => {
    setScreenCaptureBlobUrl(null);
    setRecordedBlob(null);
    setStreamError(null);
    setIsStreaming(false);
    setIsStreamStarting(true);
    onStateChange("recording");

    try {
      const aiStream = liveAPI.getAiAudioStream
        ? liveAPI.getAiAudioStream()
        : null;
      await screenCapture.start(aiStream);
      setIsStreaming(true);

      logger.info("Attempting Live API connection...");
      await liveAPI.connect();
      logger.info("Live API connection attempt finished.");

      if (!liveAPI.connected) {
        logger.warn(
          "Live API connection might not be established immediately after connect() resolves."
        );
      }
    } catch (err: unknown) {
      logger.error("Streaming setup failed:", err);
      setStreamError("Failed to start streaming");
      cleanupStreaming();
      onStateChange("idle");
    } finally {
      if (!streamError) {
        setIsStreamStarting(false);
      }
    }
  }, [screenCapture, liveAPI, cleanupStreaming, streamError, onStateChange]);

  const handleStopStreaming = useCallback(() => {
    cleanupStreaming();
  }, [cleanupStreaming]);

  // Effect to manage AudioRecorder
  useEffect(() => {
    let recorderInstance: AudioRecorder | null = null;
    let handleAudioData: ((base64: string) => void) | null = null;

    if (isStreaming && liveAPI.connected) {
      logger.info(
        "Effect: Streaming active and API connected. Setting up audio recorder..."
      );

      if (!audioRecorderRef.current) {
        recorderInstance = new AudioRecorder();
        audioRecorderRef.current = recorderInstance;

        handleAudioData = (base64: string) => {
          if (liveAPI.client && liveAPI.connected) {
            liveAPI.client.sendRealtimeInput([
              {
                mimeType: "audio/pcm;rate=16000",
                data: base64,
              },
            ]);
          }
        };

        recorderInstance.on("data", handleAudioData);
        recorderInstance
          .start()
          .then(() =>
            logger.info("Effect: Audio recorder started successfully.")
          )
          .catch((err) => {
            logger.error("Effect: Failed to start audio recorder:", err);
            setStreamError(
              `Failed to start audio: ${err.message || "Unknown error"}`
            );
            if (handleAudioData) {
              recorderInstance?.off("data", handleAudioData);
            }
            if (audioRecorderRef.current === recorderInstance) {
              audioRecorderRef.current = null;
            }
          });
      }
    }

    return () => {
      if (audioRecorderRef.current) {
        logger.info("Effect Cleanup: Stopping recorder");
        audioRecorderRef.current.stop();
        audioRecorderRef.current = null;
      }
    };
  }, [isStreaming, liveAPI.connected, liveAPI.client]);

  // Effect for sending video frames
  useEffect(() => {
    if (
      isStreaming &&
      liveAPI.connected &&
      screenCapture.stream &&
      videoFrameCanvasRef.current
    ) {
      const videoElement = document.createElement("video");
      videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.srcObject = screenCapture.stream;
      videoElement.play().catch((e) => logger.error("Video play failed", e));

      const canvas = videoFrameCanvasRef.current;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      if (!ctx) {
        logger.error("Failed to get 2D context for canvas");
        return;
      }

      const sendFrame = () => {
        if (
          !isStreaming ||
          !liveAPI.connected ||
          !screenCapture.stream ||
          videoElement.readyState < videoElement.HAVE_METADATA
        ) {
          return;
        }

        const targetWidth = Math.min(videoElement.videoWidth, 640);
        const scaleFactor = targetWidth / videoElement.videoWidth;
        const targetHeight = videoElement.videoHeight * scaleFactor;

        if (targetWidth > 0 && targetHeight > 0) {
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          try {
            ctx.drawImage(videoElement, 0, 0, targetWidth, targetHeight);
            const base64 = canvas.toDataURL("image/jpeg", 1.0);
            const data = base64.slice(base64.indexOf(",") + 1);
            liveAPI.client.sendRealtimeInput([
              { mimeType: "image/jpeg", data },
            ]);
          } catch (e) {
            if (
              !(e instanceof DOMException && e.name === "InvalidStateError")
            ) {
              logger.warn("Canvas drawImage error:", e);
            }
          }
        }
      };

      videoProcessIntervalRef.current = window.setInterval(sendFrame, 500);

      return () => {
        if (videoProcessIntervalRef.current) {
          clearInterval(videoProcessIntervalRef.current);
          videoProcessIntervalRef.current = null;
        }
        videoElement.pause();
        videoElement.srcObject = null;
      };
    }
  }, [isStreaming, liveAPI.connected, screenCapture.stream, liveAPI.client]);

  // Effect for handling WebSocket close
  useEffect(() => {
    const handleClose = () => {
      if (isStreaming) {
        logger.warn("LiveAPI WebSocket closed unexpectedly during streaming.");
        setStreamError(
          "Connection lost. Please stop and start streaming again."
        );
        setIsStreaming(false);
      }
    };
    liveAPI.client.on("close", handleClose);

    return () => {
      liveAPI.client.off("close", handleClose);
    };
  }, [liveAPI.client, isStreaming]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (screenCaptureBlobUrlRef.current) {
        URL.revokeObjectURL(screenCaptureBlobUrlRef.current);
      }
    };
  }, []);

  return {
    handleStartStreaming,
    handleStopStreaming,
    isStreaming,
    isStreamStarting,
    streamError,
    screenCaptureBlobUrl,
    recordedBlob,
    liveAPIConnected: liveAPI.connected,
    videoFrameCanvasRef,
  };
}
