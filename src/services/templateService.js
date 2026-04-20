import { buildTemplateData } from "../utils/buildTemplateData.js";
import { templateRenderer } from "./templateRenderer.js";

export function templateService(data = {}) {
  const templateData = buildTemplateData(data);

  return {
    templates: ["welcome", "alert", "status"],
    rendered: templateRenderer("welcome", templateData),
  };
}
