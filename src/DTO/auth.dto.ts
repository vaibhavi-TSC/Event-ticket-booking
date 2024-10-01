import { IsNotEmpty, IsEmail, MinLength, MaxLength } from "class-validator";

export class AuthDTO {
    
   @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(15)
    password: string;

    @IsNotEmpty()
    role: string;

}