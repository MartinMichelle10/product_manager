import { IsNotEmpty, IsString } from 'class-validator';
export class BarcodeDto {
  @IsNotEmpty()
  @IsString()
  readonly barcode: string;
}
