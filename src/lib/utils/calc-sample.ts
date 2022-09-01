/**
 * calculate sum of two numbers.
 * @param a - first argument
 * @param b - second argument
 */
export const sum2 = (a: number, b: number): number => a + b;

/**
 * calculate sum of multiple numbers.
 * @param a - arguments
 */
export const sum = (...a: number[]): number => {
  let result = 0;
  a.forEach((x) => {
    result += x;
  });
  return result;
};
