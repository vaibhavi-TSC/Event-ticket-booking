import { Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, Post, Request, UseGuards} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from 'src/schemas/ticket.schema';
import { AuthService } from 'src/auth/auth.service';
import { Auth } from 'src/schemas/auth.schema';
import { AdminGuard } from 'src/Auth/auth.guard';


@Controller('ticket')
export class TicketController {
    constructor ( private ticketservice: TicketService,
        private authservice: AuthService
    ){}

    @Post ('create-ticket')
    @UseGuards(AdminGuard)
    async generateticket(@Body() ticket: Ticket): Promise<Ticket>{
         const TicketCreated = await this.ticketservice.generateticket(ticket);
         return this.ticketservice.generateticket(ticket);
        // return this.ticketservice.generateticket(ticket, auth);
    }



    @Get('fetch-tickets')
    findAll(){
        return this.ticketservice.findAll();
    }

   @Delete(':id')
   async delete(@Param('id') id: string){
    return this.ticketservice.delete(id);
   }
}
