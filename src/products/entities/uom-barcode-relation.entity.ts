import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from 'typeorm';
import { UOM } from './uom.entity';
import { BarcodeType } from './enum/barcode.enum';

@Entity()
@Index('idx_barcode_type', ['type_barcode'])
export class UOMBarcodeRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barcode: string;

  @Column({ type: 'enum', enum: BarcodeType, default: BarcodeType.CODE128 })
  type_barcode: BarcodeType;

  @ManyToOne(() => UOM, (uom) => uom.barcodes, { onDelete: 'CASCADE' })
  uom: UOM;
}
