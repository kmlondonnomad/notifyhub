import { CHANNELS } from "./constants.js";
import { normalizeChannel } from "./normalizeChannel.js";

export function isValidChannel(channel) {
  return CHANNELS.includes(normalizeChannel(channel));
}
