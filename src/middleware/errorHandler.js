export function errorHandler(err, req, res, next) {
  return res.status(500).json({ error: "internal_error" });
}
