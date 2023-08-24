import {
  Injectable
} from '@nestjs/common';

import {
  Model
} from 'mongoose';

import { IGenericRepository } from 'src/domain/abstracts';

@Injectable()
export class EmployeeServiceDB<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  async get(email: string) {
    return await this._repository.findOne({Email : email}).populate(this._populateOnFind).exec();
  }

  update(email: string, item: T) {
    return this._repository.findOneAndUpdate({Email : email}, item);
  }
}
