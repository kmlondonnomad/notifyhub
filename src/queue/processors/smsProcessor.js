import { sendSms } from "../../channels/sms/twilioProvider.js";

export function smsProcessor(notification = {}) {
  return sendSms({
    to: "+900000000000",
    message: notification.payload?.message || "",
  });
}
