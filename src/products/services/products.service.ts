import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  async findAll() {
    const products: Product[] = await this.productRepository.find({
      relations: ['uoms', 'uoms.barcodes', 'uoms.images', 'uoms.addons'],
    });

    if (products.length > 0) {
      return products;
    }

    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NO_CONTENT);
  }

  async findOne(id: number) {
    const product: Product = await this.productRepository.findOne({
      where: { id },
      relations: ['uoms', 'uoms.barcodes', 'uoms.images', 'uoms.addons'],
    });

    if (product) {
      return product;
    }

    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NO_CONTENT);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return { updateProductDto, id };
  }

  async remove(id: number) {
    const result = await this.productRepository.delete(id);

    if (result.affected === 1) {
      return 'Product deleted successfully';
    }

    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.BAD_REQUEST);
  }
}
