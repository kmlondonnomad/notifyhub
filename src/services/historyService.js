import { buildHistoryRecord } from "../utils/buildHistoryRecord.js";

export function historyService(item = {}) {
  return {
    items: [buildHistoryRecord(item)],
  };
}
