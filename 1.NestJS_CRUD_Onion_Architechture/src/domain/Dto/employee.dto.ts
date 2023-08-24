import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  FirstName: string;

  @IsString()
  @IsNotEmpty()
  SurName: string;

  @IsString()
  @IsNotEmpty()
  Gender: string;

  @IsString()
  @IsNotEmpty()
  Designation: string;

  @IsString()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsNotEmpty()
  Address: string;

  @IsString()
  @IsNotEmpty()
  Balance: number;
}

