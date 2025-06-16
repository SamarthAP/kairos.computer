import { useState, useEffect, useRef, useCallback } from "react";
import { UseMediaStreamResult } from "@/app/hooks/use-media-stream-mux";

interface UseScreenCaptureResult extends UseMediaStreamResult {
  mediaBlobUrl: string | undefined;
  start: (aiAudioStreamParam?: MediaStream | null) => Promise<MediaStream>;
}

interface UseScreenCaptureProps {
  onStop?: (blobUrl: string, blob: Blob) => void;
}

// Helper function to play audio
const playSound = (soundFile: string) => {
  const audio = new Audio(soundFile);
  audio.volume = 0.2;
  audio.play().catch((error) => {
    console.warn(`Failed to play sound ${soundFile}:`, error);
    // Optionally, you could notify the user or just log,
    // as autoplay policies can sometimes prevent sound.
  });
};

export function useScreenCapture({
  onStop = () => null,
}: UseScreenCaptureProps): UseScreenCaptureResult {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | undefined>(
    undefined
  );
  const mediaChunksRef = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const stop = useCallback(() => {
    playSound("/sounds/stop-streaming.wav"); // Play stop sound
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    setStream(null);
    setIsStreaming(false);
  }, [stream]);

  useEffect(() => {
    const handleStreamEnded = () => {
      setIsStreaming(false);
      setStream(null);
      stop();
    };
    if (stream) {
      stream
        .getTracks()
        .forEach((track) => track.addEventListener("ended", handleStreamEnded));
      return () => {
        stream
          .getTracks()
          .forEach((track) =>
            track.removeEventListener("ended", handleStreamEnded)
          );
      };
    }
  }, [stream, stop]);

  const start = async (aiAudioStreamParam?: MediaStream | null) => {
    setMediaBlobUrl(undefined);
    mediaChunksRef.current = []; // Reset chunks
    // const controller = new CaptureController();
    // controller.setFocusBehavior("no-focus-change");
    const display = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
      // controller
    });

    let mic: MediaStream | null = null;
    try {
      mic = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      console.warn("No mic found");
    }

    // mix into one track
    const ctx = new AudioContext();
    const destination = ctx.createMediaStreamDestination();

    // helper to pipe any MediaStream's tracks into the mix
    const connect = (s: MediaStream | null | undefined) => {
      if (!s) return;
      s.getAudioTracks().forEach((t) => {
        const node = ctx.createMediaStreamSource(new MediaStream([t]));
        node.connect(destination);
      });
    };

    const finalStreamTracks: MediaStreamTrack[] = [];
    finalStreamTracks.push(...display.getVideoTracks()); // Add video tracks

    // Connect all audio sources to the mixing context
    connect(display); // Display audio (e.g., tab audio from screen share)
    connect(mic); // Microphone audio
    if (aiAudioStreamParam) {
      connect(aiAudioStreamParam); // AI voice audio
    }

    // Add mixed audio tracks from the destination node
    finalStreamTracks.push(...destination.stream.getAudioTracks());

    const finalStream = new MediaStream(finalStreamTracks);

    setStream(finalStream);
    setIsStreaming(true);

    mediaRecorderRef.current = new MediaRecorder(finalStream, {
      mimeType: "video/mp4",
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        mediaChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstart = () => {
      playSound("/sounds/start-streaming.wav"); // Play start sound
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(mediaChunksRef.current, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      setMediaBlobUrl(url);
      onStop(url, blob);
    };

    mediaRecorderRef.current.start();

    return finalStream;
  };

  const result: UseScreenCaptureResult = {
    type: "screen",
    start,
    stop,
    isStreaming,
    stream,
    mediaBlobUrl,
  };

  return result;
}
