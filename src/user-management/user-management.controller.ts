import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterUserCommand } from './commands/impl/register-user.command';
import { RegisterUserDto } from './interfaces/register-user-dto.interface';

import { User } from './models/user.model';
import { GetUsersQuery } from './queries/impl/get-users.query';

@Controller('users')
export class UserManagementController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async killDragon(@Body() dto: RegisterUserDto): Promise<User> {
    return this.commandBus.execute(new RegisterUserCommand(dto));
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
