import { buildTemplateData } from "../utils/buildTemplateData.js";

export function templateService(data = {}) {
  return {
    templates: ["welcome", "alert", "status"],
    data: buildTemplateData(data),
  };
}
