import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
export class ImageDto {
  @Optional()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly imageUrl: string;
}
