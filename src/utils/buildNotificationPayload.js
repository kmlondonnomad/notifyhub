export function buildNotificationPayload(input = {}) {
  return {
    channel: input.channel || "email",
    type: input.type || "system",
    message: input.message || "",
  };
}
