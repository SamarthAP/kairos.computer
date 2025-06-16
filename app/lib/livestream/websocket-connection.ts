const WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "wss://api.kairos.computer/core/v1"
    : "wss://api-dev.kairos.computer/core/v1";

export const getCreateWorkflowWebSocketUrl = () => {
  return `${WEBSOCKET_URL}/websocket/homepage/screenshare`;
};
