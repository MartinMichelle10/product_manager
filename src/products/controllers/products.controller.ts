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

import { UpdateProductDto } from '../dto';

import { UpdateInterceptor } from '../../middleware/update.interceptor';
import { ProductHandler } from '../handlers/product.handler';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly createProductHandler: ProductHandler,
  ) {}

  @Post()
  @UseInterceptors(new UpdateInterceptor('Created'))
  create(@Body(new ValidationPipe()) createProductDto: UpdateProductDto) {
    return this.createProductHandler.handleCreate(createProductDto);
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

  // TODO: update
  @Patch(':id')
  @UseInterceptors(new UpdateInterceptor('Updated'))
  update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updateProductDto: UpdateProductDto,
  ) {
    try {
      return this.createProductHandler.handleUpdate(id, updateProductDto);
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
