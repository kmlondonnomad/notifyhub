import { isValidStatus } from "./isValidStatus.js";
import { normalizeStatus } from "./normalizeStatus.js";

export function buildHistoryRecord(item = {}) {
  const normalizedStatus = normalizeStatus(item.status);
  const status = isValidStatus(normalizedStatus) ? normalizedStatus : "pending";

  return {
    id: item.id || "",
    channel: item.channel || "",
    status,
    createdAt: new Date().toISOString(),
  };
}
