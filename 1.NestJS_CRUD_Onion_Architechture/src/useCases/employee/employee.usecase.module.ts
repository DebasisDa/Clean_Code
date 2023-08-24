import { Module } from '@nestjs/common';
import { EmployeeUseCases } from './employee.usecase';
import { DbModule } from 'src/infastructure/data-services/mongoDB/db.module';
import { EmployeeFactoryService } from '../../domain/domain_service/employee-factory';

@Module({
  imports: [DbModule],
  providers: [EmployeeUseCases, EmployeeFactoryService],
  exports: [EmployeeUseCases, EmployeeFactoryService],
})
export class EmployeeUseCasesModule {}