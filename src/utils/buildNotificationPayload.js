import { isValidChannel } from "./isValidChannel.js";

export function buildNotificationPayload(input = {}) {
  const channel = isValidChannel(input.channel) ? input.channel : "email";

  return {
    channel,
    type: input.type || "system",
    message: input.message || "",
  };
}
