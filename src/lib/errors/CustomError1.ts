/**
 * custom error 1.
 * @packageDocumentation
 */

/**
 * CustomError1
 *
 * @example
 * ```typescript
 * import { CustomError1 } from '@/lib/errors';
 *
 * const func = () => {
 *   try {
 *     // ...
 *   } catch (err) {
 *     if (err instanceof CustomError1) {
 *       // error handling for CustomError1
 *     } else {
 *       // error handling for other errors
 *     }
 *   }
 * }
 * ```
 */
export default class CustomError1 extends Error {}
