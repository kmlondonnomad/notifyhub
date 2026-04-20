import { normalizeChannel } from "./normalizeChannel.js";
import { normalizeStatus } from "./normalizeStatus.js";

export function buildQueueItem(item = {}) {
  return {
    id: item.id || "",
    channel: normalizeChannel(item.channel || "email"),
    status: normalizeStatus(item.status || "pending"),
  };
}
