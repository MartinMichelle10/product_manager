import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsArray()
  @ValidateNested({ each: true })
  uoms: UOM[];
}

class Barcode {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

class Addon {
  @IsString()
  name: string;
}

class UOM {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsArray()
  @IsUrl({}, { each: true })
  images: string[];

  @IsArray()
  @ValidateNested({ each: true })
  barcodes: Barcode[];

  @IsNotEmpty()
  @ValidateNested()
  addon: Addon;
}
