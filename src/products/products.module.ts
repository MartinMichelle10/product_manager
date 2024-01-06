import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controllers/products.controller';

import {
  Product,
  Addon,
  AddonItem,
  UOMImage,
  UOMBarcode,
  UOM,
} from './entities';

import {
  ProductSeeder,
  AddonItemSeeder,
  AddonSeeder,
  BarcodeSeeder,
  UOMSeeder,
  ImageSeeder,
} from './seeders';

import { CreateProductHandler, PersistCreateProductHandler } from './handlers';

import { CreateProductTransformer } from './transformers';

import { PersistCreateProductPublisher } from './publishers';

import { PersistCreateProductSubscriber } from './subscribers';

import {
  UomService,
  ImagesService,
  UOMBarcodeService,
  AddonService,
  ProductsService,
} from './services';

import { RmqModule } from '../rmq/rmq.module';

@Module({
  controllers: [ProductsController, PersistCreateProductSubscriber],
  providers: [
    ProductsService,
    UOMBarcodeService,
    ImagesService,
    AddonService,
    UomService,
    ProductSeeder,
    AddonItemSeeder,
    AddonSeeder,
    BarcodeSeeder,
    UOMSeeder,
    ImageSeeder,
    CreateProductHandler,
    CreateProductTransformer,
    PersistCreateProductPublisher,
    PersistCreateProductSubscriber,
    PersistCreateProductHandler,
  ],
  imports: [
    RmqModule,
    TypeOrmModule.forFeature([
      Product,
      Addon,
      AddonItem,
      UOMImage,
      UOMBarcode,
      UOM,
    ]),
  ],
  exports: [
    ProductSeeder,
    AddonItemSeeder,
    AddonSeeder,
    BarcodeSeeder,
    UOMSeeder,
    ImageSeeder,
  ],
})
export class ProductsModule {}
