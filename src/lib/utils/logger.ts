export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
export type LoggerProps = {
  logLevel?: LogLevel;
  context?: string;
  output?: (message: string) => void;
};

/**
 * Logger Class
 */
export default class Logger {
  logLevel: LogLevel = 'INFO';

  context = 'default';

  // eslint-disable-next-line no-console
  #loggerOutput = console.log;

  constructor(props?: LoggerProps) {
    if (props?.logLevel) this.logLevel = props.logLevel;
    if (props?.context) this.context = props.context;
    if (props?.output) this.#loggerOutput = props.output;
  }

  info(message: string) {
    this.#loggerOutput(message);
  }
}
