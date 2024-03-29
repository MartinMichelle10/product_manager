import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { Addon } from './products/entities/addon.entity';
import { UOM } from './products/entities/uom.entity';
import { UOMBarcode } from './products/entities/uom-barcode.entity';
import { AddonItem } from './products/entities/addon-item.entity';
import { UOMImage } from './products/entities/uom-image.entity';
import { ProductSeeder } from './products/seeders/product.seeder';
import { AddonItemSeeder } from './products/seeders/addonItem.seeder';
import { AddonSeeder } from './products/seeders/addon.seeder';
import { BarcodeSeeder } from './products/seeders/barcodes.seeder';
import { UOMSeeder } from './products/seeders/uom.seeder';
import { ImageSeeder } from './products/seeders/images.seeder';
import config from './config/index';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.apm.database.host,
      port: 3306,
      username: config.apm.database.username,
      password: config.apm.database.password,
      database: config.apm.database.database,
      entities: [Product, AddonItem, Addon, UOM, UOMBarcode, UOMImage],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly productSeeder: ProductSeeder,
    private readonly addonItemSeeder: AddonItemSeeder,
    private readonly addonSeeder: AddonSeeder,
    private readonly barcodeSeeder: BarcodeSeeder,
    private readonly uOMSeeder: UOMSeeder,
    private readonly imageSeeder: ImageSeeder,
  ) {}

  async onApplicationBootstrap() {
    // Seed the data on application startup
    await Promise.all([
      await this.productSeeder.seed(),
      await this.addonSeeder.seed(),
      await this.addonItemSeeder.seed(),
      await this.uOMSeeder.seed(),
      await this.barcodeSeeder.seed(),
      await this.imageSeeder.seed(),
    ]);
  }
}
