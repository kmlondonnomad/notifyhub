import { buildRetryConfig } from "../utils/buildRetryConfig.js";

export function retryService() {
  return buildRetryConfig();
}
