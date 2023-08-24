import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  Balance: number;
}