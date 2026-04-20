export function formatPayload(payload) {
  return {
    ...payload,
    createdAt: new Date().toISOString(),
  };
}
