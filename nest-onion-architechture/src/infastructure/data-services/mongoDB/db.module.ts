import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schema/employee.schema';
import { MongoDataServices } from './mongo-data-services.service';
import { IDataServices } from 'src/domain/abstracts/data-services.abstract';
import { Genre, GenreSchema } from './schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema
      },
      { name: Genre.name, schema: GenreSchema },
    ]),
    MongooseModule.forRoot(
      'mongodb+srv://basis:das@clas.30jzjbn.mongodb.net/nuptially-next?retryWrites=true&w=majority/Employee'),
  ],
  providers: [{
    provide: IDataServices,
    useClass: MongoDataServices
  }],
  exports: [IDataServices],
})
export class DbModule { }