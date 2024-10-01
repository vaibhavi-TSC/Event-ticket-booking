import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { Auth } from 'src/schemas/auth.schema';
import { AuthDTO } from 'src/DTO/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    findAll() {
        throw new Error('Method not implemented.');
    }
    constructor (@InjectModel('Auth') private AuthModel : Model<AuthDTO>,
      private jwtService: JwtService
     ){}

    async create(auth: AuthDTO): Promise<AuthDTO > {
        if(!auth.email || !auth.password || !auth.name){
            throw new BadRequestException ('Please fill all fields');
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(auth.password, salt);
        const createSignup = new this.AuthModel({...auth, password: hashedPassword});

        console.log('User created successfully!');
        return createSignup.save();
    }

    async login(auth: { email: string; password: string ; role: string}): Promise<{ loggedin: AuthDTO; accessToken: string }> {
        if( !auth.password || !auth.email) {
            throw new BadRequestException('username or password is Missing ');
        }
        const loggedin = await this.AuthModel.findOne({ email: auth.email });
           
            if (!loggedin) {
                throw new BadRequestException('Invalid credentials');
              }
    
               const isMatch = await bcrypt.compare(auth.password,loggedin.password);
    
               if(!isMatch){
                throw new NotFoundException('Password is not matching')
               }

               const payload = {email: loggedin.email, sub: loggedin._id, role: loggedin.role};
               const accessToken = this.jwtService.sign(payload);
                await loggedin.save();
             console.log('user logged in successfully!');
              return {
                loggedin,
                accessToken
            };
            
    }
    async findById(id: string): Promise<AuthDTO> {
        const user = await this.AuthModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
