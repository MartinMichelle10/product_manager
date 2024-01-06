import { IsNotEmpty, IsString } from 'class-validator';
export class AddonDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
