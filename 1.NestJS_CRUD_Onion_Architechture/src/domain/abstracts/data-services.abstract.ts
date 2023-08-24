
import { EmployeeEN } from '../entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract empoyees: IGenericRepository<EmployeeEN>;
}