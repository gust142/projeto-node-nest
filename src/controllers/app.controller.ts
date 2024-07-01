import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { randomUUID } from 'node:crypto';
import {CreateUserDto} from '../dtos/create-user-dto'
import { UserServfice } from 'src/services/user.service';

@Controller('user')
export class AppController {
constructor(private userService:UserServfice){

}
  @Post('create')
  async addUser(@Body() body: CreateUserDto) {
  
    return {
      data:{
        user: await this.userService.addUser(body)
      }
    }
  }
  @Get('list')
  async listUsers() {
    return {
      data:{
        users: await this.userService.users()
      }
    }
  }
  @Get(':id')
  async findById(@Param('id') id: string,) {
    return {
      data:{
        users: await this.userService.find({
          where:{
            id:{equals: id}
          }
        })
      }
    }
  }



}
