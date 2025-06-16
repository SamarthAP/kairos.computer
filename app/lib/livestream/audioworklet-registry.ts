export type WorkletGraph = {
  node?: AudioWorkletNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlers: Array<(this: MessagePort, ev: MessageEvent) => any>;
};

export const registeredWorklets: Map<
  AudioContext,
  Record<string, WorkletGraph>
> = new Map();

export const createWorketFromSrc = (
  workletName: string,
  workletSrc: string
) => {
  const script = new Blob(
    [`registerProcessor("${workletName}", ${workletSrc})`],
    {
      type: "application/javascript",
    }
  );

  return URL.createObjectURL(script);
};
