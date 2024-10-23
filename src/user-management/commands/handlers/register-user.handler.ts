import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '../../repository/main/user.repository';
import { RegisterUserCommand } from '../impl/register-user.command';
import { User } from 'src/user-management/models/user.model';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: RegisterUserCommand) {
    const { name } = command;

    const user = this.publisher.mergeObjectContext(User.create(name));
    const id = await this.repository.save(user);

    user.register(id);
    user.commit();

    return user;
  }
}
