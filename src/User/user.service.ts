import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private UserModel: Model<User>){}

    async findById(id: string): Promise<User> {
       console.log(`Fetched All tickets with id: ${id} Successfully!`)
       return this.UserModel.findById(id).exec();
    }
}
