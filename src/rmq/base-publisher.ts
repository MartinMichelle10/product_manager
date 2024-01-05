import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { Options } from 'amqplib';

export interface IPublishHeaders {
  [key: string]: number | boolean | string;
}
@Injectable()
export class BasePublisher {
  constructor(private readonly amqpConnection: AmqpConnection) {}
  publish<T = any>(
    exchange: string,
    routingKey: string,
    message: T,
    options?: Options.Publish,
  ) {
    global.logger.info(
      `RMQPublisher: Published to Exchange ${exchange}, routing key: ${routingKey}`,
      { payload: message },
    );
    return this.amqpConnection.publish(exchange, routingKey, message, options);
  }
}
