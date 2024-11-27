import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return `This action addsrgwr new user ${JSON.stringify(createUserDto)}`;
  }

  findAll() {
    return 'User name is varun,anand ';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
