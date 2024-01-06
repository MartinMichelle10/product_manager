import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOM } from '../entities/uom.entity';

@Injectable()
export class UomService {
  constructor(
    @InjectRepository(UOM)
    private uomRepository: Repository<UOM>,
  ) {}

  create(uom: any) {
    return this.uomRepository.save(uom);
  }
}
