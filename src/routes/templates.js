import { templateService } from "../services/templateService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function templatesRoute() {
  return buildApiResponse(templateService());
}
