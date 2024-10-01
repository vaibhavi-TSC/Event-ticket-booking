import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/schemas/auth.schema';
import { Ticket } from 'src/schemas/ticket.schema';

@Injectable()
export class TicketService {
    constructor(@InjectModel('Ticket') private TicketModel: Model<Ticket>,
                @InjectModel('Auth') private AuthModel: Model<Auth>
    ) { }

    async generateticket(ticket: Ticket): Promise<Ticket> {
        // if (auth.role !== 'Admin') {
        //      throw new ForbiddenException('Only Admins can generate tickets');
        //  }

        if (!ticket.seatNumber || !ticket.eventName || !ticket.userName) {
            throw new BadRequestException('Please fill all fields');
        }

        const CreateTicket = await this.TicketModel.create(ticket);
        console.log('Ticket created Successfully!');
        return CreateTicket;
        //return { ticket: CreateTicket, auth };
    }


    async findAll(): Promise<Ticket[]> {
        console.log("Ticket Fetched Successfully!")
        return this.TicketModel.find().exec();
    }

    async delete(id: string): Promise<Ticket> {
        console.log('Ticket deleted successfully!')
        const deletedTicket = await this.TicketModel.findByIdAndDelete(id);
        return deletedTicket;
    }
}
