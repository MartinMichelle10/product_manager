import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSeeder } from './seeders/product.seeder';
import { AddonItemSeeder } from './seeders/addonItem.seeder';
import { AddonSeeder } from './seeders/addon.seeder';
import { BarcodeSeeder } from './seeders/barcodes.seeder';
import { UOMSeeder } from './seeders/uom.seeder';
import { ImageSeeder } from './seeders/images.seeder';
import { Addon } from './entities/addon.entity';
import { AddonItem } from './entities/addon-item.entity';
import { UOMImage } from './entities/uom-image.entity';
import { UOMBarcode } from './entities/uom-barcode.entity';
import { UOM } from './entities/uom.entity';
import { CreateProductHandler } from './handlers/create-product.handler';
import { CreateProductTransformer } from './transformers/create_product.transformer';
import { PersistCreateProductPublisher } from 'src/publishers/product-persister.publisher';
import { RmqModule } from 'src/rmq/rmq.module';
import { PersistCreateProductSubscriber } from 'src/subscribers/persist_product_create.subscriber';
import { UomService } from './services/uom.service';

@Module({
  controllers: [ProductsController, PersistCreateProductSubscriber],
  providers: [
    ProductsService,
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
