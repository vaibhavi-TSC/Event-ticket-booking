import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './Ticket/ticket.module';



@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://vaibhavitsc:012345678@cluster0.rtzsl.mongodb.net/'), 
    AuthModule, 
    TicketModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
