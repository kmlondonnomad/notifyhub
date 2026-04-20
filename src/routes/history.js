import { historyService } from "../services/historyService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function historyRoute() {
  return buildApiResponse(historyService());
}
