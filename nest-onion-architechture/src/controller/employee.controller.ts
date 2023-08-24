import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { CreateAuthorDto } from 'src/domain/Dto/employee.dto';
import { UpdateEmployeeDto } from 'src/domain/Dto/employee.update.dto';
import { EmployeeUseCases } from 'src/useCases/employee/employee.usecase';


@Controller('api/employee')
export class EmployeeController {
  constructor(private readonly employeeUseCases: EmployeeUseCases) { }

  @Get()
  findAll() {
    return this.employeeUseCases.getAllEmployee();
  }

  @Post()
  createAuthor(@Body() employeeDto: CreateAuthorDto) {
    return this.employeeUseCases.createEmployee(employeeDto);
  }

  @Put(':id')
  updateEmployee(
    @Param('id') email: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    try{
    return this.employeeUseCases.withdrawBalance(email, updateEmployeeDto?.Balance);
    }catch(err){
      throw err;
    }
  }
}