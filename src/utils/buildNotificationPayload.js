import { isValidChannel } from "./isValidChannel.js";
import { normalizeChannel } from "./normalizeChannel.js";
import { normalizeMessage } from "./normalizeMessage.js";
import { normalizeType } from "./normalizeType.js";

export function buildNotificationPayload(input = {}) {
  const normalizedChannel = normalizeChannel(input.channel);
  const channel = isValidChannel(normalizedChannel) ? normalizedChannel : "email";

  return {
    channel,
    type: normalizeType(input.type || "system"),
    message: normalizeMessage(input.message),
  };
}
