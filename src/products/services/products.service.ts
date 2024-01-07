import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: ProductDto) {
    return this.productRepository.save(createProductDto);
  }

  getProducts() {
    return this.productRepository.find({
      relations: ['uoms', 'uoms.barcodes', 'uoms.images', 'uoms.addon'],
    });
  }

  async getProductById(id: number) {
    return this.productRepository.findOne({
      where: { id },
      relations: ['uoms', 'uoms.barcodes', 'uoms.images', 'uoms.addon'],
    });
  }

  update(productId: number, updateProductDto: ProductDto) {
    return this.productRepository.update(productId, updateProductDto);
  }

  delete(productId: number) {
    return this.productRepository.delete(productId);
  }
}
