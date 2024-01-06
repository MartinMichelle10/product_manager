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
import { UOMBarcode } from './uom-barcode.entity';
import { Addon } from './addon.entity';

@Entity()
@Index('idx_product_addon', ['product', 'addon'])
export class UOM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Product, (product) => product.uoms, { onDelete: 'CASCADE' })
  product: Product;

  @OneToMany(() => UOMImage, (image) => image.uom, { onDelete: 'CASCADE' })
  images: UOMImage[];

  @OneToMany(() => UOMBarcode, (barcode) => barcode.uom, {
    onDelete: 'CASCADE',
  })
  barcodes: UOMBarcode[];

  @ManyToOne(() => Addon, (addon) => addon.uoms, { onDelete: 'CASCADE' })
  addon: Addon;
}
