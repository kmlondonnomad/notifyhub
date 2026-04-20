import { notificationService } from "../services/notificationService.js";
import { notificationQueue } from "../queue/notificationQueue.js";
import { retryService } from "../services/retryService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function notificationsRoute(payload = {}) {
  const notification = notificationService(payload);
  const queue = notificationQueue(notification);

  return buildApiResponse({
    notification,
    queue,
    retry: retryService(),
  });
}
