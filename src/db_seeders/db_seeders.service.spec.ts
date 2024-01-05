import { Test, TestingModule } from '@nestjs/testing';
import { DbSeedersService } from './db_seeders.service';

describe('DbSeedersService', () => {
  let service: DbSeedersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbSeedersService],
    }).compile();

    service = module.get<DbSeedersService>(DbSeedersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
