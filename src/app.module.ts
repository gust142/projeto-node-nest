import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PrismaService } from './database/prisma.service';
import { UserServfice } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,UserServfice],
})
export class AppModule {}
