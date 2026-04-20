export function buildTemplateData(data = {}) {
  return {
    name: data.name || "User",
    message: data.message || "",
    status: data.status || "pending",
  };
}
