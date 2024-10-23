import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';
const users = [];

@Injectable()
export class UserRepository {
  async save(data: { id?: string; name: string }): Promise<string> {
    const user = new User({
      name: data.name,
      id: (users.length + 1).toString(),
    });
    users.push(user);
    return user.id;
  }

  async findOneById(id: string): Promise<User> {
    return users.find((user) => user.id === id);
  }

  async findAll(): Promise<User[]> {
    return users;
  }
}
