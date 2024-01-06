import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOMBarcode } from '../entities/uom-barcode.entity';
import { BarcodeType } from '../entities/enum/barcode.enum';

@Injectable()
export class BarcodeSeeder {
  constructor(
    @InjectRepository(UOMBarcode)
    private readonly repository: Repository<UOMBarcode>,
  ) {}

  async seed() {
    const examplesToSeed = [
      {
        barcode: '763JSHD3',
        type: BarcodeType.CODE128,
        uom: { id: 1, name: 'UOM 1', productId: 1, addonId: 1 },
      },
      {
        barcode: '376JSHD3',
        type: BarcodeType.CODE128,
        uom: { id: 2, name: 'UOM 2', productId: 2, addonId: 2 },
      },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
