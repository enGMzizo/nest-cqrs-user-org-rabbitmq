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

  static create(name: string): User {
    // Perform business logic when creating a new User
    // Instantiate the User
    const user = new User({ name });
    return user;
  }

  register(id: string) {
    this.id = id;
    this.apply(new UserRegisteredEvent({ id: this.id, name: this.name }));
  }
}
