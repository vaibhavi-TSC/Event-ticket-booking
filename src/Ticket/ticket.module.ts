import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from 'src/schemas/ticket.schema';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthSchema } from 'src/schemas/auth.schema';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Ticket', schema: TicketSchema}, {name: 'Auth', schema: AuthSchema}])],
    providers: [TicketService, JwtService, AuthService],
    controllers: [TicketController]
})
export class TicketModule {}
