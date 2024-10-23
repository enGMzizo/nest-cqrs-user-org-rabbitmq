import { AggregateRoot } from '@nestjs/cqrs';
import { UserRegisteredEvent } from '../events/impl/user-registered.event';

export class User extends AggregateRoot {
  id?: string;
  name: string;
  constructor({ id, name }: { id?: string; name: string }) {
    super();
    this.id = id;
    this.name = name;
  }
}
