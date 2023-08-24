import { Injectable } from '@nestjs/common';
import { EmployeeEN } from 'src/domain';
import { CreateAuthorDto } from 'src/domain/Dto/employee.dto';

@Injectable()
export class EmployeeFactoryService {
  createnewEmployee(createAuthorDto: CreateAuthorDto) {
    const newEmployee = new EmployeeEN();
    newEmployee.FirstName = createAuthorDto.FirstName;
    newEmployee.SurName = createAuthorDto.SurName;
    newEmployee.Gender = createAuthorDto.Gender;
    newEmployee.Designation = createAuthorDto.Designation;
    newEmployee.Email = createAuthorDto.Email;
    newEmployee.Address = createAuthorDto.Address;
    newEmployee.Balance = createAuthorDto.Balance;
    return newEmployee;
  }
  
  getBalance (employee : EmployeeEN): number {
    return employee?.Balance;
  }

  canWithdrawBalance (employee : EmployeeEN, amount : number): boolean {
    return (employee.Balance - amount) > 0;
  }

  withdrawBalance (employee : EmployeeEN, amount : number): EmployeeEN {
     employee.Balance = employee?.Balance - amount;
     return employee;
  }
}
