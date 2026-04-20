import { channelResolver } from "./channelResolver.js";

export function notificationService() {
  return {
    channels: channelResolver(),
  };
}
