import { MessageProperties } from 'amqplib';

export type IRmqMessageProperties = MessageProperties & {
  headers: MessageProperties['headers'];
};
