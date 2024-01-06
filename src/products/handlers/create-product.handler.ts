import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto';
import { ProductsService } from '../services/products.service';
import { CreateProductTransformer } from '../transformers/create_product.transformer';
import { PersistCreateProductPublisher } from 'src/products/publishers/product-persister.publisher';

@Injectable()
export class CreateProductHandler {
  constructor(
    private readonly productService: ProductsService,
    private createProductTransformer: CreateProductTransformer,
    private readonly persistCreateProductPublisher: PersistCreateProductPublisher,
  ) {}

  async handle(data: CreateProductDto) {
    const event = this.createProductTransformer.transform(data);
    const product = await this.productService.create(event.product);
    this.persistCreateProductPublisher.send({ uoms: event.uoms, product });
    return true;
  }
}
