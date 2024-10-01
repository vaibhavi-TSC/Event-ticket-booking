import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()

export class Auth extends Document {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ enum: ['Admin', 'User'], default: 'User' })
    role: string;
    
}


export const AuthSchema  = SchemaFactory.createForClass(Auth);