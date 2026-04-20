import { notificationService } from "../services/notificationService.js";
import { notificationQueue } from "../queue/notificationQueue.js";
import { retryService } from "../services/retryService.js";
import { buildApiResponse } from "../utils/buildApiResponse.js";

export function notificationsRoute() {
  return buildApiResponse({
    service: notificationService(),
    queue: notificationQueue(),
    retry: retryService(),
  });
}
