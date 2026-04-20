import { emailProcessor } from "./processors/emailProcessor.js";
import { smsProcessor } from "./processors/smsProcessor.js";
import { pushProcessor } from "./processors/pushProcessor.js";

export function notificationQueue() {
  return [emailProcessor(), smsProcessor(), pushProcessor()];
}
