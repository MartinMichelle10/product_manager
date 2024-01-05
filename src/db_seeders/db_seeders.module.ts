import { Module } from '@nestjs/common';
import { DbSeedersService } from './db_seeders.service';
import { DbSeedersController } from './db_seeders.controller';

@Module({
  controllers: [DbSeedersController],
  providers: [DbSeedersService],
})
export class DbSeedersModule {}
