import { buildStatusSummary } from "../utils/buildStatusSummary.js";
import { buildChannelStats } from "../utils/buildChannelStats.js";

export function statusService() {
  return {
    summary: {
      ...buildStatusSummary(),
      sent: 3,
      failed: 1,
      pending: 1,
      processing: 0,
    },
    channels: {
      ...buildChannelStats(),
      email: 2,
      sms: 1,
      push: 1,
    },
  };
}
