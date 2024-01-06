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

import { UpdateInterceptor } from '../../middleware/update.interceptor';
import { ProductHandler } from '../handlers/product.handler';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly createProductHandler: ProductHandler,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UseInterceptors(new UpdateInterceptor('Created'))
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return this.createProductHandler.handleCreate(createProductDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrived.',
  })
  @ApiResponse({ status: 204, description: 'No Content.' })
  findAll() {
    try {
      return this.productsService.getProducts();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrived.',
  })
  @ApiResponse({ status: 204, description: 'No Content.' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.getProductById(+id);
    } catch (error) {
      throw error;
    }
  }

  // TODO: update
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
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
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UseInterceptors(new UpdateInterceptor('Deleted'))
  remove(@Param('id') id: string) {
    try {
      return this.productsService.delete(+id);
    } catch (error) {
      throw error;
    }
  }
}
