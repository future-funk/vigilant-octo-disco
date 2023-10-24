import { AUTH_ERROR } from './error.constant'
export class GenericError extends Error {
  /* istanbul ignore next */
  constructor(
    public error: string,
    public error_code: string,
    public error_description: string
  ) {
    super(error_description)
    Object.setPrototypeOf(this, GenericError.prototype)
  }

  static fromPayload({
    error,
    error_code,
    error_description,
  }: {
    error: string
    error_code: string
    error_description: string
  }) {
    return new GenericError(error, error_code, error_description)
  }
}

export class TimeoutError extends GenericError {
  constructor() {
    super('timeout', AUTH_ERROR.TIMOUT, 'Timeout')
    Object.setPrototypeOf(this, TimeoutError.prototype)
  }
}
