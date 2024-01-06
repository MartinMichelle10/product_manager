import { Repository } from 'typeorm';
import { Product } from './entities';
import { ProductsService } from './services/products.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: Repository<Product>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product), // Replace with your actual entity
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});
