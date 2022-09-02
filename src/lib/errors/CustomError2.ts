/**
 * custom error 2
 *
 * @packageDocumentation
 */

/**
 * Exception Contents example
 */
export interface CustomErrorContents {
  title: string;
  summary: string;
  detail?: string;
}

export type CustomError2Options = {
  title: string;
  summary: string;
  detail: string;
  errorCode: number;
};

export type CustomError2Dump = CustomError2Options;

/**
 * custom error implements some interface
 */
class CustomError2 extends Error implements CustomErrorContents {
  /**
   * title of error.
   */
  title: string;

  /**
   * summary of error.
   */
  summary: string;

  /**
   * detail of error.
   */
  detail: string;

  /**
   * error code for the error.
   */
  errorCode: number;

  constructor(message: string, options: CustomError2Options) {
    super(message);
    const { title, summary, detail, errorCode } = options;
    this.title = title;
    this.summary = summary;
    this.detail = detail;
    this.errorCode = errorCode;
  }

  /**
   * dump the error information.
   */
  dump(): CustomError2Dump {
    return {
      title: this.title,
      summary: this.summary,
      detail: this.detail,
      errorCode: this.errorCode,
    };
  }
}
export default CustomError2;
