import { emailProcessor } from "./processors/emailProcessor.js";
import { smsProcessor } from "./processors/smsProcessor.js";
import { pushProcessor } from "./processors/pushProcessor.js";
import { buildQueueItem } from "../utils/buildQueueItem.js";

export function notificationQueue(notification = {}) {
  const processors = {
    email: emailProcessor,
    sms: smsProcessor,
    push: pushProcessor,
  };

  const runProcessor = processors[notification.channel];

  const processorResult = runProcessor
    ? runProcessor(notification)
    : "unsupported channel";

  const status = processorResult === "failed" ? "failed" : "sent";

  return [
    buildQueueItem({
      id: notification.id || "queue-item-1",
      channel: notification.channel || "email",
      status,
    }),
  ];
}
