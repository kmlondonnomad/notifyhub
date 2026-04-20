import { isValidChannel } from "./isValidChannel.js";
import { normalizeMessage } from "./normalizeMessage.js";

export function buildNotificationPayload(input = {}) {
  const channel = isValidChannel(input.channel) ? input.channel : "email";

  return {
    channel,
    type: input.type || "system",
    message: normalizeMessage(input.message),
  };
}
