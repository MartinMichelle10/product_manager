import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './products.controller';
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
import { UOMBarcodeRelation } from './entities/uom-barcode-relation.entity';
import { UOM } from './entities/uom.entity';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductSeeder,
    AddonItemSeeder,
    AddonSeeder,
    BarcodeSeeder,
    UOMSeeder,
    ImageSeeder,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Addon,
      AddonItem,
      UOMImage,
      UOMBarcodeRelation,
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
