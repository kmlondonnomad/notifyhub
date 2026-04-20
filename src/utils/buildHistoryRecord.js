import { isValidStatus } from "./isValidStatus.js";

export function buildHistoryRecord(item = {}) {
  const status = isValidStatus(item.status) ? item.status : "pending";

  return {
    id: item.id || "",
    channel: item.channel || "",
    status,
    createdAt: new Date().toISOString(),
  };
}
