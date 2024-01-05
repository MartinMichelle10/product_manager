import { RabbitHandlerConfig } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces';

export type Binding = Pick<
  RabbitHandlerConfig,
  | 'queue'
  | 'name'
  | 'connection'
  | 'exchange'
  | 'routingKey'
  | 'createQueueIfNotExists'
  | 'assertQueueErrorHandler'
  | 'queueOptions'
  | 'errorBehavior'
  | 'errorHandler'
  | 'allowNonJsonMessages'
>;
