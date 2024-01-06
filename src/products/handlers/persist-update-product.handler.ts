import { Injectable } from '@nestjs/common';
import { ImagesService } from '../services/images.service';
import { UomService } from '../services/uom.service';
import { UOMBarcodeService } from '../services/barcode.service';
import { AddonService } from '../services/addons.service';
import { PersistUpdateProductDto } from '../dto';

@Injectable()
export class PersistUpdateProductHandler {
  constructor(
    private readonly uomService: UomService,
    private readonly imageService: ImagesService,
    private readonly barcodeService: UOMBarcodeService,
    private readonly addonService: AddonService,
  ) {}
  async handle(data: PersistUpdateProductDto) {
    const { product, uoms } = data;

    const uomPromises = uoms.map(async (uom) => {
      this.processUOM(uom, product);
    });

    const results = await Promise.allSettled(uomPromises);

    return results;
  }

  private async processUOM(uom, product) {
    // TODO: handle transactions
    //console.log('processUOM', uom);
    try {
      const [updatedImages, updatedBarcodes, updatedAddon] = await Promise.all([
        this.imageService.update(uom.images),
        this.barcodeService.update(uom.barcodes),
        this.addonService.update(uom.addon),
      ]);

      const uomWithImages = {
        ...uom,
        images: updatedImages,
        product,
        barcodes: updatedBarcodes,
        addon: updatedAddon,
      };

      const result = await this.uomService.update(uomWithImages);
      return result;
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error('Error processing UOM with images:', error);
      throw error; // Rethrow the error for the calling code to handle
    }
  }
}
