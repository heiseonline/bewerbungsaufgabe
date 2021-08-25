/* eslint-disable no-magic-numbers */

export enum HttpStatus {
  NotFound = 404,
  InternalServerError = 500,
}

export class HttpException extends Error {
  constructor(readonly statusCode: number, message?: string) {
    super(message)

    this.name = HttpException.name

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpException)
    }
  }
}

export class NotFoundException extends HttpException {
  constructor() {
    super(HttpStatus.NotFound, 'Not Found')
    this.name = NotFoundException.name
  }
}
