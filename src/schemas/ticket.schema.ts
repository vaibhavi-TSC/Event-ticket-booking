import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()

export class Ticket extends Document {
    @Prop()
    eventName: string;

    @Prop()
    userName: string;

    @Prop()
    seatNumber: number;

      

}

export const TicketSchema = SchemaFactory.createForClass(Ticket);