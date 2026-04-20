import { channelResolver } from "./channelResolver.js";
import { formatPayload } from "../utils/formatPayload.js";
import { buildNotificationPayload } from "../utils/buildNotificationPayload.js";
import { generateNotificationId } from "../utils/generateNotificationId.js";

export function notificationService(payload = {}) {
  const normalized = buildNotificationPayload(payload);

  return {
    id: generateNotificationId(),
    channels: channelResolver(),
    channel: normalized.channel,
    type: normalized.type,
    status: "pending",
    payload: formatPayload(normalized),
  };
}
