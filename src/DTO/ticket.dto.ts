import { IsString, IsNotEmpty } from "class-validator";

export class TicketDTO {
    
    @IsNotEmpty()
    @IsString()
    eventName : string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    seatNumber: number;
}