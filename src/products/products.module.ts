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

import {
  ProductHandler,
  PersistCreateProductHandler,
  PersistUpdateProductHandler,
} from './handlers';

import { ProductTransformer } from './transformers';

import { PersistProductPublisher } from './publishers';

import {
  PersistCreateProductSubscriber,
  PersistUpdateProductSubscriber,
} from './subscribers';

import {
  UomService,
  ImagesService,
  UOMBarcodeService,
  AddonService,
  ProductsService,
} from './services';

import { RmqModule } from '../rmq/rmq.module';

@Module({
  controllers: [
    ProductsController,
    PersistCreateProductSubscriber,
    PersistUpdateProductSubscriber,
  ],
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
    ProductHandler,
    ProductTransformer,
    PersistProductPublisher,
    PersistUpdateProductHandler,
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
