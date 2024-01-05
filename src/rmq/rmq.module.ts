import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { BasePublisher } from './base-publisher';
import { RMQ_CONFIG } from './rmq.config';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, RMQ_CONFIG)],
  providers: [BasePublisher],
  exports: [RabbitMQModule.forRoot(RabbitMQModule, RMQ_CONFIG), BasePublisher],
})
export class RmqModule {}
