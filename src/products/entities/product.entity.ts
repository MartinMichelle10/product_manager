// src/products/product.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { UOM } from './uom.entity';

@Entity()
@Index('idx_product_name', ['name'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  price: number;

  @Column()
  initial_qty: number;

  @OneToMany(() => UOM, (uom) => uom.product, { cascade: true })
  uoms: UOM[];
}
