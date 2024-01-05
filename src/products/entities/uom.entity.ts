import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { Product } from './product.entity';
import { UOMImage } from './uom-image.entity';
import { UOMBarcodeRelation } from './uom-barcode-relation.entity';
import { Addon } from './addon.entity';

@Entity()
@Index('idx_product_addon', ['product', 'addon'])
export class UOM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Product, (product) => product.uoms)
  product: Product;

  @OneToMany(() => UOMImage, (image) => image.uom)
  images: UOMImage[];

  @OneToMany(() => UOMBarcodeRelation, (barcode) => barcode.uom)
  barcodes: UOMBarcodeRelation[];

  @ManyToOne(() => Addon, (addon) => addon.uoms)
  addon: Addon;
}
