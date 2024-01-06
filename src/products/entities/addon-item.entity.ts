import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Addon } from './addon.entity';

@Entity()
export class AddonItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @Column()
  itemDescription: string;

  @Column()
  itemCost: number;

  @Column()
  itemPrice: number;

  @Column()
  isValid: boolean;

  @ManyToOne(() => Addon, (addon) => addon.addonItems, { onDelete: 'CASCADE' })
  addon: Addon;
}
