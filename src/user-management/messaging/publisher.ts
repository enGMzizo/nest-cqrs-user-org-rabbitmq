import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { IEventPublisher } from '@nestjs/cqrs';

@Injectable()
export class Publisher implements IEventPublisher {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  connect(): void {
    // init logic if is necessary
  }

  publish<T>(event: T): any {
    this.amqpConnection.publish(
      'ex.user-management.service',
      event.constructor.name,
      Buffer.from(JSON.stringify(event)),
    );
  }
}
