import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOMImage } from '../entities/uom-image.entity';

@Injectable()
export class ImageSeeder {
  constructor(
    @InjectRepository(UOMImage)
    private readonly repository: Repository<UOMImage>,
  ) {}

  async seed() {
    const examplesToSeed = [
      {
        imageUrl: 'https://picsum.photos/200/300',
        uom: { id: 1, name: 'UOM 1', productId: 1, addonId: 1 },
      },
      {
        imageUrl: 'https://picsum.photos/200/300',
        uomId: { id: 2, name: 'UOM 2', productId: 2, addonId: 2 },
      },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
