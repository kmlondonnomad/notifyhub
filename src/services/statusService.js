import { buildStatusSummary } from "../utils/buildStatusSummary.js";
import { buildChannelStats } from "../utils/buildChannelStats.js";

export function statusService() {
  return {
    summary: buildStatusSummary(),
    channels: buildChannelStats(),
  };
}
