import { logger } from "../../utils/logger.js";

export function sendSms(input = {}) {
  const result = {
    channel: "sms",
    to: input.to || "",
    message: input.message || "",
    status: "sent",
  };

  logger(result);
  return result.status;
}
