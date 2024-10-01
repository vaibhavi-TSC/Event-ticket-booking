import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()

export class User extends Document {
    @Prop()
    
    username: string;

    @Prop({ type: Types.ObjectId, ref: 'Auth', required: true }) // Reference to Auth model
    auth: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: 'Ticket', required:true})
    ticket: Types.ObjectId; 
}

export const UserSchema = SchemaFactory.createForClass(User)