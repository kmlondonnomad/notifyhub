import { templatesRoute } from "../src/routes/templates.js";

const result = templatesRoute({
  name: "Burak",
  message: "Alert test",
  status: "sent",
});

console.log("templatesRoute test");
console.log(result);
