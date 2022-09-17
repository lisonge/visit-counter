export const range = (p0: unknown, p1: unknown, p2: unknown) => {};

export const toSafeInteger = (value: unknown, defaultValue = 0) => {
  const n = Number(value);
  if (Number.isNaN(n) || !Number.isSafeInteger(n)) {
    return defaultValue;
  }
  return n;
};

export const toBigInt = (
  value: string | number | boolean,
  defaultValue = 0n
) => {
  try {
    return BigInt(value);
  } catch {
    return defaultValue;
  }
};
