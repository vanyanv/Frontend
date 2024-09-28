export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isFunction(value: unknown): boolean {
  return typeof value === 'function';
}

export function isObject(value: unknown): boolean {
  if (Array.isArray(value)) return false;
  if (value == null) return false;
  if (typeof value === 'object') return true;
  return false;
}

export function isPlainObject(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) return false;
  return Object.prototype.toString.call(value) === '[object Object]';
}
