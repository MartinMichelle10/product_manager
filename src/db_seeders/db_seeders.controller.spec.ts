import { Test, TestingModule } from '@nestjs/testing';
import { DbSeedersController } from './db_seeders.controller';
import { DbSeedersService } from './db_seeders.service';

describe('DbSeedersController', () => {
  let controller: DbSeedersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbSeedersController],
      providers: [DbSeedersService],
    }).compile();

    controller = module.get<DbSeedersController>(DbSeedersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
