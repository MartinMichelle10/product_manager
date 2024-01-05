import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UOM } from './uom.entity';

@Entity()
export class UOMImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => UOM, (uom) => uom.images, { onDelete: 'CASCADE' })
  uom: UOM;
}
