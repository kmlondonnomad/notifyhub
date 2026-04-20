import { notificationsRoute } from "../src/routes/notifications.js";

const result = notificationsRoute({
  channel: "email",
  type: "welcome",
  message: "Hello from test",
});

console.log("notificationsRoute test");
console.log(result);
