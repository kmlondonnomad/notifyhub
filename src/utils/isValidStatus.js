import { STATUSES } from "./constants.js";

export function isValidStatus(status) {
  return STATUSES.includes(String(status || "").toLowerCase());
}
