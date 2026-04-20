import { channelResolver } from "./channelResolver.js";
import { formatPayload } from "../utils/formatPayload.js";

export function notificationService(payload = {}) {
  return {
    channels: channelResolver(),
    payload: formatPayload(payload),
  };
}
