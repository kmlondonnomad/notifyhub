import { statusService } from "../services/statusService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function statusRoute() {
  return buildApiResponse(statusService());
}
