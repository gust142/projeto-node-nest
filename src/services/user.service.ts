import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/dtos/create-user-dto';


@Injectable()
export class UserServfice  {
    constructor(private prisma:PrismaService){
        
    }

    async addUser(user:CreateUserDto):Promise<CreateUserDto>{
        const userCreated = await this.prisma.user.create({
      data:{
          name: user.name,
          function: user.function,
          address: user.address
      }
    });
    return userCreated;
    }

    async users():Promise<CreateUserDto[]>{
        return this.prisma.user.findMany();
    }
    async findByName(name:string):Promise<CreateUserDto[]>{
        return this.prisma.user.findMany();
    }
    async find(
        params: {
            skip?: number;
            take?: number;
            cursor?: Prisma.UserWhereUniqueInput;
            where?: Prisma.UserWhereInput;
            orderBy?: Prisma.UserOrderByWithRelationInput;
        }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}