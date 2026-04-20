import { sendSms } from "../../channels/sms/twilioProvider.js";

export function smsProcessor() {
  return sendSms();
}
