import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsArray()
  @ApiProperty()
  @ValidateNested({ each: true })
  uoms: UOM[];
}

class Barcode {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  @ApiProperty()
  type: string;
}

class Addon {
  @IsString()
  @ApiProperty()
  name: string;
}

export class UOM {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsArray()
  @ApiProperty()
  @IsUrl({}, { each: true })
  images: string[];

  @IsArray()
  @ApiProperty()
  @ValidateNested({ each: true })
  barcodes: Barcode[];

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  addon: Addon;
}
