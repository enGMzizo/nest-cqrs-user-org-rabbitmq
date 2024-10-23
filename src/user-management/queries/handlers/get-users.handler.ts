import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import clc from 'chalk';
import { UserRepository } from '../../repository/main/user.repository';
import { GetUsersQuery } from '../impl/get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly repository: UserRepository) {}

  async execute(_q: GetUsersQuery) {
    return this.repository.findAll();
  }
}
