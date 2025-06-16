import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  MultimodalLiveAPIClientConnection,
  MultimodalLiveClient,
} from "@/app/lib/livestream/multimodal-live-client";
import { LiveConfig } from "@/app/lib/livestream/multimodal-live-types";
import { AudioStreamer } from "@/app/lib/livestream/audio-streamer";
import { audioContext } from "@/app/lib/utils";
import VolMeterWorket from "@/app/lib/livestream/worklets/vol-meter";
// import { SchemaType } from "@google/generative-ai";

export type UseLiveAPIResults = {
  client: MultimodalLiveClient;
  setConfig: (config: LiveConfig) => void;
  config: LiveConfig;
  connected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  volume: number;
  getAiAudioStream: () => MediaStream | null;
};

export function useLiveAPI({
  url,
}: MultimodalLiveAPIClientConnection): UseLiveAPIResults {
  const client = useMemo(() => new MultimodalLiveClient({ url }), [url]);
  const audioStreamerRef = useRef<AudioStreamer | null>(null);

  const [connected, setConnected] = useState(false);
  const [config, setConfig] = useState<LiveConfig>({
    model: "models/gemini-2.0-flash-exp",
    systemInstruction: {
      parts: [],
    },
    generationConfig: {
      responseModalities: "audio",
    },
    tools: [
      {
        googleSearch: {},
      },
      // {
      //   functionDeclarations: [
      //     {
      //       name: "update_workflow",
      //       description:
      //         "Update the workflow details based on the user's request. Inputs represent the full workflow definition which must be passed in.",
      //       parameters: {
      //         type: SchemaType.OBJECT,
      //         properties: {
      //           name: {
      //             type: SchemaType.STRING,
      //             description: "A concise 5-6 word name for the workflow",
      //           },
      //           instructions: {
      //             type: SchemaType.STRING,
      //             description: "A detailed workflow instruction guide",
      //           },
      //           integrations: {
      //             type: SchemaType.ARRAY,
      //             description:
      //               "A list of user authenticated integrations needed (only list the names of the platforms/tools shown being used in the video that are needed for the workflow to run)",
      //             items: {
      //               type: SchemaType.STRING,
      //               enum: [
      //                 "gmail",
      //                 "google_drive",
      //                 "google_sheets",
      //                 "google_calendar",
      //                 "google_docs",
      //                 "linkedin",
      //               ],
      //               format: "enum",
      //             },
      //           },
      //           inputs: {
      //             type: SchemaType.ARRAY,
      //             description:
      //               "A list of specific inputs needed for execution of the workflow (e.g., email_address, spreadsheet_url, etc) that the user should provide in order to run the workflow. Do not write sentences here. Just list the inputs.",
      //             items: {
      //               type: SchemaType.STRING,
      //             },
      //           },
      //           description: {
      //             type: SchemaType.STRING,
      //             description: "A description of the workflow in 2 lines.",
      //           },
      //           trigger: {
      //             type: SchemaType.STRING,
      //             enum: ["manual", "daily", "weekly", "monthly", "on_event"],
      //             description: "When or how often the workflow should execute",
      //             format: "enum",
      //           },
      //         },
      //         required: [
      //           "name",
      //           "instructions",
      //           "inputs",
      //           "description",
      //           "trigger",
      //           "integrations",
      //         ],
      //       },
      //     },
      //   ],
      // },
    ],
  });
  const [volume, setVolume] = useState(0);

  // register audio for streaming server -> speakers
  useEffect(() => {
    if (!audioStreamerRef.current) {
      audioContext({ id: "audio-out" }).then((audioCtx: AudioContext) => {
        audioStreamerRef.current = new AudioStreamer(audioCtx);
        audioStreamerRef.current
          .addWorklet("vumeter-out", VolMeterWorket, (ev) => {
            setVolume(ev.data.volume);
          })
          .then(() => {
            // Successfully added worklet
          });
      });
    }
  }, [audioStreamerRef]);

  useEffect(() => {
    const onClose = () => {
      setConnected(false);
    };

    const stopAudioStreamer = () => audioStreamerRef.current?.stop();

    const onAudio = (data: ArrayBuffer) =>
      audioStreamerRef.current?.addPCM16(new Uint8Array(data));

    client
      .on("close", onClose)
      .on("interrupted", stopAudioStreamer)
      .on("audio", onAudio);

    return () => {
      client
        .off("close", onClose)
        .off("interrupted", stopAudioStreamer)
        .off("audio", onAudio);
    };
  }, [client]);

  const connect = useCallback(async () => {
    if (!config) {
      throw new Error("config has not been set");
    }
    client.disconnect();
    await client.connect(config);
    setConnected(true);
  }, [client, setConnected, config]);

  const disconnect = useCallback(async () => {
    client.disconnect();
    setConnected(false);
  }, [setConnected, client]);

  const getAiAudioStream = useCallback(() => {
    return audioStreamerRef.current?.outputStream || null;
  }, []);

  return {
    client,
    config,
    setConfig,
    connected,
    connect,
    disconnect,
    volume,
    getAiAudioStream,
  };
}
