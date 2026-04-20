import { channelResolver } from "./channelResolver.js";
import { formatPayload } from "../utils/formatPayload.js";
import { buildNotificationPayload } from "../utils/buildNotificationPayload.js";

export function notificationService(payload = {}) {
  const normalized = buildNotificationPayload(payload);

  return {
    channels: channelResolver(),
    payload: formatPayload(normalized),
  };
}
