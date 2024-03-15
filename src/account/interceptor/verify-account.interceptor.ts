import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class VerifyAccountInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const accountIdFromUrl = request?.params?.accountId;
    const accountIdFromToken = request?.user?.id;

    if (accountIdFromUrl !== accountIdFromToken) {
      throw new UnauthorizedException('Invalid account ID');
    }

    return next.handle();
  }
}
