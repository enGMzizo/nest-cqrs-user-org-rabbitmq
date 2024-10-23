import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { UserRegisteredEvent } from '../events/impl/user-registered.event';
import { User } from '../models/user.model';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class Subscriber {
  constructor(private readonly event$: EventBus) {}

  @RabbitSubscribe({
    exchange: 'ex.user-management.service',
    routingKey: UserRegisteredEvent.name,
    queue: UserRegisteredEvent.name,
  })
  public async userRegistered(msg: { id: string; name: string }) {
    console.log('User registered:', msg);
    this.event$.subject$.next(new UserRegisteredEvent(msg));
  }
}
