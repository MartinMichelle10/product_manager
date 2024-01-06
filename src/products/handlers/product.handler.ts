import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto';
import { ProductsService } from '../services/products.service';
import { ProductTransformer } from '../transformers/product.transformer';
import { PersistProductPublisher } from '../publishers/product-persister.publisher';
import { Product } from '../entities';
import { UomService } from '../services';

@Injectable()
export class ProductHandler {
  constructor(
    private readonly productService: ProductsService,
    private readonly uomService: UomService,
    private productTransformer: ProductTransformer,
    private readonly persistProductPublisher: PersistProductPublisher,
  ) {}

  async handleCreate(data: CreateProductDto) {
    const event = this.productTransformer.transformCreate(data);
    const product: Product = await this.productService.create(event.product);
    this.persistProductPublisher.sendCreate({
      uoms: event.uoms,
      product,
    });
    return {
      product: product,
    };
  }

  async handleUpdate(productId: number, data: UpdateProductDto) {
    const event = this.productTransformer.transformUpdate(productId, data);
    const product = await this.productService.update(productId, event.product);
    this.persistProductPublisher.sendUpdate({
      uoms: event.uoms,
      product,
    });
    return {
      product: product,
    };
  }
}
