import { historyService } from "../services/historyService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function historyRoute(item = {}) {
  return buildApiResponse(historyService(item));
}
