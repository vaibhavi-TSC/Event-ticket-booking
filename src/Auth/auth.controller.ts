import { Body, Controller,  Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from 'src/schemas/auth.schema';

@Controller('auth')
export class AuthController {
    constructor( private readonly authservice : AuthService ){}

    @Post('signup')
    async signup(@Body() auth: Auth) {
       const  Signedup = await  this.authservice.create(auth);  
       return Signedup;
    }

    @Post('login')
    async login(@Body() auth: Auth){
        const LoggedinUser = await this.authservice.login(auth);
        return LoggedinUser;
    }
}
