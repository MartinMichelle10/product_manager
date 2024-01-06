/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm'; // Import any dependencies your controller uses
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductsController } from './controllers/products.controller';
import {
  AddonService,
  ImagesService,
  ProductsService,
  UOMBarcodeService,
  UomService,
} from './services';
import { Product } from './entities';
import {
  PersistCreateProductHandler,
  PersistUpdateProductHandler,
  ProductHandler,
} from './handlers';
import {
  AddonItemSeeder,
  AddonSeeder,
  BarcodeSeeder,
  ImageSeeder,
  ProductSeeder,
  UOMSeeder,
} from './seeders';
import { ProductTransformer } from './transformers';
import { PersistProductPublisher } from './publishers';

describe('Product Contoller', () => {
  let controller: ProductsController;
  let service: ProductsService;
  let repository: Repository<any>; // Replace with the actual entity type

  beforeEach(async () => {});

  it('should be defined', () => {});

  // Add more test cases as needed
});
