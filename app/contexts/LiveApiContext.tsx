import { createContext, FC, ReactNode, useContext } from "react";
import { useLiveAPI, UseLiveAPIResults } from "@/app/hooks/use-live-api";

const LiveAPIContext = createContext<UseLiveAPIResults | undefined>(undefined);

export type LiveAPIProviderProps = {
  children: ReactNode;
  url: string;
};

export const LiveAPIProvider: FC<LiveAPIProviderProps> = ({
  url,
  children,
}) => {
  const liveAPI = useLiveAPI({ url });

  return (
    <LiveAPIContext.Provider value={liveAPI}>
      {children}
    </LiveAPIContext.Provider>
  );
};

export const useLiveAPIContext = () => {
  const context = useContext(LiveAPIContext);
  if (!context) {
    throw new Error("useLiveAPIContext must be used wihin a LiveAPIProvider");
  }
  return context;
};
