import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto';

@Injectable()
export class ProductTransformer {
  transformCreate(dependenciesDto: CreateProductDto) {
    const { name, uoms } = dependenciesDto;
    const newUoms = this.convertImagesArray(uoms);

    return {
      product: { name },
      uoms: newUoms,
    };
  }

  transformUpdate(id: number, dependenciesDto: UpdateProductDto) {
    const { name, uoms } = dependenciesDto;
    const updateUoms = this.convertImagesArray(uoms);

    return {
      product: { id, name },
      uoms: updateUoms,
    };
  }

  private convertImagesArray(uoms) {
    const result = uoms.map((uom) => {
      const { images } = uom;
      if (images.length === 0) {
        global.logger.warn(`Images array for ${name} is empty.`);
      }
      const imagesObjects = images.map((image) => ({ imageUrl: image }));
      return { ...uom, images: imagesObjects };
    });

    return result;
  }
}
