import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  Employee,
  EmployeeDocument,
  GenreDocument,
  Genre,
} from './schema';

import { IDataServices } from 'src/domain/abstracts/data-services.abstract';
import { EmployeeServiceDB } from './employee.service';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  empoyees: EmployeeServiceDB<Employee>;
  genres: EmployeeServiceDB<Genre>;

  constructor(
    @InjectModel(Employee.name)
    private AuthorRepository: Model<EmployeeDocument>,
    @InjectModel(Genre.name)
    private GenreRepository: Model<GenreDocument>,
  ) {}

  onApplicationBootstrap() {
    this.empoyees = new EmployeeServiceDB<Employee>(this.AuthorRepository);
    this.genres = new EmployeeServiceDB<Genre>(this.GenreRepository);
  }
}
