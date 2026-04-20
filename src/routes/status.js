import { statusService } from "../services/statusService.js";

export function statusRoute() {
  return statusService();
}
