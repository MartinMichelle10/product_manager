import { IsNotEmpty, IsString } from 'class-validator';
export class ImageDto {
  @IsNotEmpty()
  @IsString()
  readonly imageUrl: string;
}
