import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UOM } from './uom.entity';

@Entity()
export class UOMBarcode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barcode: string;

  @ManyToOne(() => UOM, (uom) => uom.barcodes, { onDelete: 'CASCADE' })
  uom: UOM;
}
