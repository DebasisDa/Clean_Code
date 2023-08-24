import { Injectable } from "@nestjs/common";
import { EmployeeServiceDB } from '../../infastructure/data-services/mongoDB/employee.service';
import { IDataServices } from "src/domain/abstracts/data-services.abstract";
import { CreateAuthorDto } from "src/domain/Dto/employee.dto";
import { EmployeeFactoryService } from "../../domain/domain_service/employee-factory";
import { error } from "console";


@Injectable()
export class EmployeeUseCases {
  constructor(
    private dataServices: IDataServices,
    private employeeFactoryService: EmployeeFactoryService
  ) { }

  getAllEmployee(): Promise<any> {
    return this.dataServices.empoyees.getAll();
  }

  createEmployee(employeeDto: CreateAuthorDto): Promise<any> {
    const employee = this.employeeFactoryService.createnewEmployee(employeeDto);
    return this.dataServices.empoyees.create(employee);
  }

 async withdrawBalance (email: string, balance: number) : Promise<number> {
    let employee = await this.dataServices.empoyees.get(email);
    console.log("Employeee :::: ", employee);
    if(!this.employeeFactoryService.canWithdrawBalance(employee, balance))
       throw error("Less Balance");
    
    employee = this.employeeFactoryService.withdrawBalance(employee, balance);

    console.log("employee   ::: ", employee);

    const updatedEmployee = await this.dataServices.empoyees.update(email, employee);

    console.log("updatedEmployee :::: ", updatedEmployee);

    return updatedEmployee?.balance;
  }
}