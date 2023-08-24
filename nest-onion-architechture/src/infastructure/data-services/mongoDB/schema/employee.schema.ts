import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
import { EmployeeEN } from 'src/domain/entity/employee.entity';
  
  export type EmployeeDocument = Employee & Document;
  
  @Schema()
  export class Employee implements EmployeeEN {
    @Prop()
    FirstName: string;
  
    @Prop()
    SurName: string;
  
    @Prop()
    Designation: string;
  
    @Prop()
    Email: string;
  
    @Prop()
    Address: string;
  
    @Prop()
    Balance: number;
  
    @Prop()
    Gender: string;
  }
  
  export const EmployeeSchema = SchemaFactory.createForClass(Employee);