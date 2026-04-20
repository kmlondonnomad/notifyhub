import { env } from "./config/env.js";
import { notificationsRoute } from "./routes/notifications.js";
import { templatesRoute } from "./routes/templates.js";
import { historyRoute } from "./routes/history.js";
import { statusRoute } from "./routes/status.js";
import { dashboard } from "./ui/dashboard.js";

function bootstrap() {
  const routes = {
    notifications: notificationsRoute({
      channel: "email",
      type: "welcome",
      message: "Welcome to NotifyHub",
    }),
    templates: templatesRoute({
      name: "Burak",
      message: "System alert",
      status: "sent",
    }),
    history: historyRoute({
      id: "seed-history-1",
      channel: "email",
      status: "sent",
    }),
    status: statusRoute(),
  };

  return {
    app: env.appName,
    mode: env.nodeEnv,
    dashboard: dashboard(),
    routes,
  };
}

const appState = bootstrap();

console.log(`${appState.app} started`);
console.log(appState);
