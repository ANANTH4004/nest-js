import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  firstname: string;
  lastname: string;
  age: number;
  dob: Date;
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
