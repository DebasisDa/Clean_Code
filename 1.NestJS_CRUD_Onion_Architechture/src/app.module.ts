import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './controller';
import { EmployeeUseCasesModule } from './useCases/employee/employee.usecase.module';
import { DbModule } from './infastructure/data-services/mongoDB/db.module';

@Module({
  imports: [
      EmployeeUseCasesModule,
      DbModule
  ],
  controllers: [AppController, EmployeeController],
  providers: [AppService, ],
  exports : []
})

export class AppModule {}
