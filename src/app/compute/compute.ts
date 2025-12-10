export function compute(x: number) {
  // Return 0 for negative inputs
  if (x < 0) return 0;

  // For zero and positive inputs, return double the value
  return x * 2;
}
