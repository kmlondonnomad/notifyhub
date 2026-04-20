import { notificationService } from "../services/notificationService.js";
import { notificationQueue } from "../queue/notificationQueue.js";

export function notificationsRoute() {
  return {
    service: notificationService(),
    queue: notificationQueue(),
  };
}
