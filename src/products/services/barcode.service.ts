import { Injectable } from '@nestjs/common';
import { BarcodeDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOMBarcode } from '../entities/uom-barcode.entity';

@Injectable()
export class UOMBarcodeService {
  constructor(
    @InjectRepository(UOMBarcode)
    private barcodeRepository: Repository<UOMBarcode>,
  ) {}

  create(barcodes: BarcodeDto[]) {
    return this.barcodeRepository.save(barcodes);
  }
}
