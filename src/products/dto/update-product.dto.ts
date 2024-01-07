import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
export class UpdateProductDto extends CreateProductDto {
  @ApiProperty()
  readonly id: number;
}
