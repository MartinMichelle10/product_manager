import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOM } from '../entities/uom.entity';
import { BarcodeType } from '../entities/enum/barcode.enum';

@Injectable()
export class UOMSeeder {
  constructor(
    @InjectRepository(UOM)
    private readonly repository: Repository<UOM>,
  ) {}

  async seed() {
    const examplesToSeed = [
      {
        id: 1,
        name: 'UOM 1',
        product: {
          id: 1,
          name: 'Product 1',
          cost: 10,
          price: 20,
          initial_qty: 10,
        },
        addon: {
          id: 1,
          name: 'Addon 1',
          isValid: true,
          description: 'Addon Desc 1',
        },
        images: [
          {
            imageUrl: 'https://picsum.photos/200/300',
            uom: {
              id: 1,
              name: 'UOM 1',
              productId: 1,
              addonId: 1,
            },
          },
        ],
        barcodes: [
          {
            barcode: '376JSHD3',
            type_barcode: BarcodeType.CODE128,
            uom: {
              id: 2,
              name: 'UOM 2',
              productId: 2,
              addonId: 2,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'UOM 2',
        product: {
          id: 2,
          name: 'Product 2',
          cost: 20,
          price: 50,
          initial_qty: 1,
        },
        addon: {
          id: 2,
          name: 'Addon 2',
          isValid: true,
          description: 'Addon Desc 2',
        },
        images: [
          {
            imageUrl: 'https://picsum.photos/200/300',
            uomId: {
              id: 2,
              name: 'UOM 2',
              productId: 2,
              addonId: 2,
            },
          },
        ],
        barcodes: [
          {
            barcode: '763JSHD3',
            type_barcode: BarcodeType.CODE39,
            uom: {
              id: 1,
              name: 'UOM 1',
              productId: 1,
              addonId: 1,
            },
          },
        ],
      },
      // Add more seed data as needed
    ];

    await Promise.all(
      examplesToSeed.map((example) => this.repository.save(example)),
    );
  }
}
