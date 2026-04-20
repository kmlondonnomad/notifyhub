import { generateNotificationId } from "../utils/generateNotificationId.js";

export const NotificationModel = {
  id: generateNotificationId(),
  channel: "",
  type: "",
  status: "pending",
  payload: {},
};
