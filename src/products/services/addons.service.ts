import { Injectable } from '@nestjs/common';
import { AddonDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Addon } from '../entities/addon.entity';

@Injectable()
export class AddonService {
  constructor(
    @InjectRepository(Addon)
    private addonRepository: Repository<Addon>,
  ) {}

  create(addon: AddonDto) {
    return this.addonRepository.save(addon);
  }

  update(addon: Addon) {
    return this.addonRepository.update(addon.id, addon);
  }
}
