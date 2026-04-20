import { sendEmail } from "../../channels/email/emailProvider.js";

export function emailProcessor() {
  return sendEmail();
}
