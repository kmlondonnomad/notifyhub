export function buildQueueItem(item = {}) {
  return {
    id: item.id || "",
    channel: item.channel || "email",
    status: item.status || "pending",
  };
}
