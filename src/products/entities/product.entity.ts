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

  @OneToMany(() => UOM, (uom) => uom.product, { onDelete: 'CASCADE' })
  uoms: UOM[];
}
