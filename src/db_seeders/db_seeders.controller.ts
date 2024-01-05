import { Controller } from '@nestjs/common';
import { DbSeedersService } from './db_seeders.service';

@Controller('db-seeders')
export class DbSeedersController {
  constructor(private readonly dbSeedersService: DbSeedersService) {}
}
