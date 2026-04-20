export function buildHistoryRecord(item = {}) {
  return {
    id: item.id || "",
    channel: item.channel || "",
    status: item.status || "pending",
    createdAt: new Date().toISOString(),
  };
}
