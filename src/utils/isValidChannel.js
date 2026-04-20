import { CHANNELS } from "./constants.js";

export function isValidChannel(channel) {
  return CHANNELS.includes(String(channel || "").toLowerCase());
}
