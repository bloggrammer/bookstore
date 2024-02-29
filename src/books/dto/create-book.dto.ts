import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Price must be a valid number' },
  )
  @IsPositive({ message: 'Price must be a positive number' })
  price: number;
}
