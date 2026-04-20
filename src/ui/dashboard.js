import { statusService } from "../services/statusService.js";

export function dashboard() {
  const stats = statusService();

  return {
    title: "NotifyHub Dashboard",
    stats,
  };
}
