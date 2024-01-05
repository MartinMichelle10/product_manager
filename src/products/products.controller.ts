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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateInterceptor } from 'src/middleware/update.interceptor';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(new UpdateInterceptor('Created'))
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    try {
      return this.productsService.create(createProductDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.productsService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.findOne(+id);
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
      return this.productsService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
