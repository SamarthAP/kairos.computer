export const logger = {
  info: (...args: unknown[]) => process.env.NODE_ENV === "development" && console.log('[INFO]', ...args),
  warn: (...args: unknown[]) => process.env.NODE_ENV === "development" && console.warn('[WARN]', ...args),
  error: (...args: unknown[]) => process.env.NODE_ENV === "development" && console.error('[ERROR]', ...args),
  log: (...args: unknown[]) => process.env.NODE_ENV === "development" && console.log(...args),
}; 