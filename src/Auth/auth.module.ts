import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from 'src/schemas/auth.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
   imports:[MongooseModule.forFeature([{name: 'Auth', schema: AuthSchema}]),
JwtModule.register({
   secret: 'ticketbookingjwt',
   signOptions: {expiresIn : '7h'},
})],
   controllers: [AuthController],
   providers: [AuthService]
})
export class AuthModule {}
