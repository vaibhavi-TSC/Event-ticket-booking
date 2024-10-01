import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new ForbiddenException('Authorization token is missing');
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = this.jwtService.decode(token) as any;

    if (decodedToken.role !== 'Admin') {
      throw new ForbiddenException('Only Admins can perform this action');
    }

    return true;
  }
}
