import { historyRoute } from "../src/routes/history.js";

const result = historyRoute({
  id: "history-test-1",
  channel: "email",
  status: "sent",
});

console.log("historyRoute test");
console.log(result);
