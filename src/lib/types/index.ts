/**
 * @packageDocumentation definitions of project types
 */

/**
 * test type A
 */
export type TestTypeA = {
  readonly a: number;
  readonly b: string;
  readonly c: string[];
};

/**
 * test type B
 */
export type TestTypeB = {
  x: {
    [key: string]: string;
  };
  y: {
    [key in keyof TestTypeA]: 1 | 2;
  };
};

/**
 * test type C
 */
export type TestTypeC = TestTypeA &
  TestTypeB & {
    v: number[];
    w: string[];
  };

/**
 * interface X
 */
export interface TestInterfaceX {
  name: string;
}
