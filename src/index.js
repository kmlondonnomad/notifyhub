import { env } from "./config/env.js";
import { notificationsRoute } from "./routes/notifications.js";
import { templatesRoute } from "./routes/templates.js";
import { historyRoute } from "./routes/history.js";
import { statusRoute } from "./routes/status.js";

console.log(env.appName);
console.log("NotifyHub started");
console.log(notificationsRoute());
console.log(templatesRoute());
console.log(historyRoute());
console.log(statusRoute());
