import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PrismaService } from './database/prisma.service';
import { UserServfice } from './services/user.service';
import { HomeController } from './controllers/home.controller';

@Module({
  imports: [],
  controllers: [AppController,HomeController],
  providers: [PrismaService,UserServfice],
})
export class AppModule {}
