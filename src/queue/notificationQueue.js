import { emailProcessor } from "./processors/emailProcessor.js";
import { smsProcessor } from "./processors/smsProcessor.js";
import { pushProcessor } from "./processors/pushProcessor.js";
import { buildQueueItem } from "../utils/buildQueueItem.js";

export function notificationQueue() {
  return [
    buildQueueItem({ id: "1", channel: "email", status: emailProcessor() ? "sent" : "failed" }),
    buildQueueItem({ id: "2", channel: "sms", status: smsProcessor() ? "sent" : "failed" }),
    buildQueueItem({ id: "3", channel: "push", status: pushProcessor() ? "sent" : "failed" }),
  ];
}
