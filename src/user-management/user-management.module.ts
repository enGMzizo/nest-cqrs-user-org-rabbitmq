import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule, EventBus } from '@nestjs/cqrs';
import { UserManagementController } from './user-management.controller';
import { UserRepository } from './repository/main/user.repository';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { Publisher } from './messaging/publisher';

@Module({
  imports: [
    CqrsModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://admin:admin@localhost:5672',
      exchanges: [
        {
          name: 'ex.user-management.service',
          type: 'topic',
        },
      ],
      connectionInitOptions: { wait: false },
    }),
  ],
  controllers: [UserManagementController],
  providers: [UserRepository, ...CommandHandlers, ...QueryHandlers, Publisher],
})
export class UserManagementModule implements OnModuleInit {
  constructor(
    private readonly event$: EventBus,
    private readonly publisher: Publisher,
  ) {}

  async onModuleInit(): Promise<any> {
    this.event$.publisher = this.publisher;
  }
}
