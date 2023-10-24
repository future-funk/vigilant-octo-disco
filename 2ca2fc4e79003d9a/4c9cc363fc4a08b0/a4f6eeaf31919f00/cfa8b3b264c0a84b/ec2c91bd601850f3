import { AUTH_ERROR } from './errorConstant'
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

export class ApiError extends GenericError {
  public response: Response

  constructor({ response, message }: { response: Response; message: string }) {
    super('api error', '', message)
    this.response = response
  }
}
