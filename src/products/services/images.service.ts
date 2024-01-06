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

  update(images: ImageDto[]) {
    for (const data of images) {
      const _img = { name: data.imageUrl, id: data.id };
      this.imageRepository.update(data.id, _img);
    }
    return true;
  }
}
