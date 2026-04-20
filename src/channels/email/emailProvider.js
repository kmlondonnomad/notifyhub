import { logger } from "../../utils/logger.js";

export function sendEmail(input = {}) {
  const result = {
    channel: "email",
    to: input.to || "",
    subject: input.subject || "",
    message: input.message || "",
    status: "sent",
  };

  logger(result);
  return result.status;
}
