import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class updateBookDto {
  @IsString()
  @IsOptional()
  readonly title: string;
  @IsString()
  @IsOptional()
  readonly description: string;
  @IsString()
  @IsOptional()
  readonly author: string;
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @IsOptional()
  @IsEnum(Category, { message: 'Please Enter Correct Category' })
  readonly category: Category;
}
