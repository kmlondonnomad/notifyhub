import { buildHistoryRecord } from "../utils/buildHistoryRecord.js";

export function historyService(item = {}) {
  return {
    items: [
      buildHistoryRecord(item),
      buildHistoryRecord({
        id: "seed-history-2",
        channel: "sms",
        status: "failed",
      }),
    ],
  };
}
