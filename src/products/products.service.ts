import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    const products: Product[] = await this.productRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.uoms', 'uoms')
      .innerJoinAndSelect('uoms.barcodes', 'barcodes')
      .innerJoinAndSelect('uoms.images', 'images')
      .innerJoinAndSelect('uoms.addon', 'addons')
      .getMany();

    if (products.length > 0) {
      return products;
    }
    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NO_CONTENT);
  }

  async findOne(id: number) {
    const product: Product = await this.productRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.uoms', 'uoms')
      .innerJoinAndSelect('uoms.barcodes', 'barcodes')
      .leftJoinAndSelect('uoms.images', 'images')
      .leftJoinAndSelect('uoms.addon', 'addons')
      .where('product.id = :id', { id })
      .getOne();

    if (product) {
      return product;
    }
    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NO_CONTENT);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const product: Product = await this.productRepository.findOneBy({ id });

    if (product) {
      return this.productRepository.delete(id);
    }
    throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.BAD_REQUEST);
  }
}
