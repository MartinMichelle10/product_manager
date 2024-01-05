import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Addon } from '../entities/addon.entity';

@Injectable()
export class AddonSeeder {
  constructor(
    @InjectRepository(Addon)
    private readonly repository: Repository<Addon>,
  ) {}

  async seed() {
    const examplesToSeed = [
      { id: 1, name: 'Addon 1', isValid: true, description: 'Addon Desc 1' },
      { id: 2, name: 'Addon 2', isValid: true, description: 'Addon Desc 1' },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
