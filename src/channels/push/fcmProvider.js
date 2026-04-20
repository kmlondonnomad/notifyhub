import { logger } from "../../utils/logger.js";

export function sendPush(input = {}) {
  const result = {
    channel: "push",
    token: input.token || "",
    message: input.message || "",
    status: "sent",
  };

  logger(result);
  return result.status;
}
