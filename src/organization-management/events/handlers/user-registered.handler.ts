import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UserRegisteredEvent } from '../impl/user-registered.event';
import { UserRepository } from '../../repository/replica/user.repository';

@EventsHandler(UserRegisteredEvent)
export class UserRegisteredHandler
  implements IEventHandler<UserRegisteredEvent>
{
  constructor(private readonly userRepository: UserRepository) {}

  async handle(event: UserRegisteredEvent) {
    console.log('Received Event', event);
    await this.userRepository.upsert(event);
    console.log('User added to organization');
  }
}
