import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { UOM } from './uom.entity';
import { AddonItem } from './addon-item.entity';

@Entity()
@Index('idx_addon', ['name'])
export class Addon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isValid: boolean;

  @OneToMany(() => UOM, (uom) => uom.addon)
  uoms: UOM[];

  @OneToMany(() => AddonItem, (addonItem) => addonItem.addon, { cascade: true })
  addonItems: AddonItem[];
}
