import { normalizeTemplateName } from "../utils/normalizeTemplateName.js";

export function templateRenderer(templateName, data) {
  return {
    templateName: normalizeTemplateName(templateName),
    data,
  };
}
