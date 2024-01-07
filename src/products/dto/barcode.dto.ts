import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
export class BarcodeDto {
  @Optional()
  readonly id: number;

  @Optional()
  readonly uomId: number;

  @IsNotEmpty()
  @IsString()
  readonly barcode: string;
}
