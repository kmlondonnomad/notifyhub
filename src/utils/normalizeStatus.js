export function normalizeStatus(status) {
  return String(status || "").trim().toLowerCase();
}
