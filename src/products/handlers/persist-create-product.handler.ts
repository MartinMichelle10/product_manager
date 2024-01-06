import { Injectable } from '@nestjs/common';
import { ImagesService } from '../services/images.service';
import { UomService } from '../services/uom.service';
import { UOMBarcodeService } from '../services/barcode.service';
import { AddonService } from '../services/addons.service';
import { PersistCreateProductDto } from '../dto';

@Injectable()
export class PersistCreateProductHandler {
  constructor(
    private readonly uomService: UomService,
    private readonly imageService: ImagesService,
    private readonly barcodeService: UOMBarcodeService,
    private readonly addonService: AddonService,
  ) {}
  async handle(data: PersistCreateProductDto) {
    const { product, uoms } = data;

    const uomPromises = uoms.map(async (uom) => {
      try {
        const [insertedImages, insertedBarcodes, insertedAddon] =
          await Promise.all([
            this.imageService.create(uom.images),
            this.barcodeService.create(uom.barcodes),
            this.addonService.create(uom.addon),
          ]);

        const uomWithImages = {
          ...uom,
          images: insertedImages,
          product,
          barcodes: insertedBarcodes,
          addon: insertedAddon,
        };

        return this.uomService.create(uomWithImages);
      } catch (error) {
        console.error('Error processing uom:', error);
      }
    });

    const results = await Promise.allSettled(uomPromises);

    return results;
  }
}
