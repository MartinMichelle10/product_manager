import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;
}
