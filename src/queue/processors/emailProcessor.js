import { sendEmail } from "../../channels/email/emailProvider.js";

export function emailProcessor(notification = {}) {
  return sendEmail({
    to: "demo@example.com",
    subject: notification.type || "system",
    message: notification.payload?.message || "",
  });
}
