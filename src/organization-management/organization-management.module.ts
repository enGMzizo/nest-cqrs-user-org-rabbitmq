import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule, EventBus } from '@nestjs/cqrs';
import { UserRepository } from './repository/replica/user.repository';
import { Subscriber } from './messaging/subscriber';
import { OrganizationManagementSagas } from './sagas/organization-management.sagas';
import { EventHandlers } from './events/handlers';

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
        {
          name: 'ex.organization-management.service',
          type: 'topic',
        },
      ],
      connectionInitOptions: { wait: false },
    }),
  ],

  providers: [
    UserRepository,
    Subscriber,
    // OrganizationManagementSagas,
    ...EventHandlers,
  ],
})
export class OrganizationManagementModule {}
