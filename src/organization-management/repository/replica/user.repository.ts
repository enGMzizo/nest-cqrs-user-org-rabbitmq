import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';
const users = {};

@Injectable()
export class UserRepository {
  async upsert(data: { id: string; name: string }) {
    const user = new User({
      name: data.name,
      id: data.id,
    });
    users[user.id] = user;
  }
}
