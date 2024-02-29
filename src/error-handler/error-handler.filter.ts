import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError, HttpException)
export class ErrorHandlerFilter extends BaseExceptionFilter {
  catch(
    exception: PrismaClientKnownRequestError | HttpException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    } else if (
      exception instanceof PrismaClientKnownRequestError &&
      exception.code === 'P2002'
    ) {
      status = HttpStatus.CONFLICT;
      message = exception.message.replace(/\n/g, '');
    }

    response.status(status).json({
      statusCode: status,
      message: message,
    });

    super.catch(exception, host);
  }
}
