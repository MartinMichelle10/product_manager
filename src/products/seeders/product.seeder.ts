import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductSeeder {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async seed() {
    const examplesToSeed = [
      { id: 1, name: 'Product 1', cost: 10, price: 20, initial_qty: 10 },
      { id: 2, name: 'Product 2', cost: 20, price: 50, initial_qty: 10 },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
