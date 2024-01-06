import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddonItem } from '../entities/addon-item.entity';

@Injectable()
export class AddonItemSeeder {
  constructor(
    @InjectRepository(AddonItem)
    private readonly repository: Repository<AddonItem>,
  ) {}

  async seed() {
    const examplesToSeed = [
      {
        addon: {
          id: 1,
          name: 'Addon 1',
          isValid: true,
          description: 'Addon Desc 1',
        },
        itemName: 'Item 1',
        itemCost: 1,
        itemPrice: 2,
        isValid: false,
        itemDescription: 'item Desc',
      },
      {
        addon: {
          id: 1,
          name: 'Addon 1',
          isValid: true,
          description: 'Addon Desc 1',
        },
        itemName: 'Item 2',
        itemCost: 1,
        itemPrice: 2,
        isValid: false,
        itemDescription: 'item Desc',
      },
      {
        addon: {
          id: 2,
          name: 'Addon 2',
          isValid: true,
          description: 'Addon Desc 1',
        },
        itemName: 'Item 3',
        itemCost: 1,
        itemPrice: 2,
        isValid: false,
        itemDescription: 'item Desc',
      },
      {
        addon: {
          id: 2,
          name: 'Addon 2',
          isValid: true,
          description: 'Addon Desc 1',
        },
        itemName: 'Item 4',
        itemCost: 1,
        itemPrice: 2,
        isValid: false,
        itemDescription: 'item Desc',
      },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
