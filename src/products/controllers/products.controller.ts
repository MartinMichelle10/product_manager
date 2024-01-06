import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

import { CreateProductDto, UpdateProductDto } from '../dto';

import { UpdateInterceptor } from 'src/middleware/update.interceptor';
import { CreateProductHandler } from '../handlers/create-product.handler';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly createProductHandler: CreateProductHandler,
  ) {}

  @Post()
  @UseInterceptors(new UpdateInterceptor('Created'))
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return this.createProductHandler.handle(createProductDto);
  }

  @Get()
  findAll() {
    try {
      return this.productsService.getProducts();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.getProductById(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  @UseInterceptors(new UpdateInterceptor('Updated'))
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateProductDto: UpdateProductDto,
  ) {
    try {
      return this.productsService.update(+id, updateProductDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @UseInterceptors(new UpdateInterceptor('Deleted'))
  remove(@Param('id') id: string) {
    try {
      return this.productsService.delete(+id);
    } catch (error) {
      throw error;
    }
  }
}
