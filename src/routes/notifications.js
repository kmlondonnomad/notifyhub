import { notificationService } from "../services/notificationService.js";
import { notificationQueue } from "../queue/notificationQueue.js";
import { retryService } from "../services/retryService.js";

export function notificationsRoute() {
  return {
    service: notificationService(),
    queue: notificationQueue(),
    retry: retryService(),
  };
}
