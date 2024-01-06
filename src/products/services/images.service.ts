import { Injectable } from '@nestjs/common';
import { ImageDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UOMImage } from '../entities/uom-image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(UOMImage)
    private imageRepository: Repository<UOMImage>,
  ) {}

  create(images: ImageDto[]) {
    return this.imageRepository.save(images);
  }
}
