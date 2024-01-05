// update.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UpdateInterceptor implements NestInterceptor {
  constructor(private message: string) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (context.getType() === 'http') {
          // Check if it's an HTTP response
          const response = context.switchToHttp().getResponse();

          // Modify the response payload after update operation
          if (response.statusCode === 200) {
            // Modify 'data' here based on your requirements
            data.message = this.message;
          }
        }

        return data;
      }),
    );
  }
}
