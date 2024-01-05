import { Options } from 'amqplib';

export enum ExchangesNames {
  PRODUCT_MANAGER = 'product_manager',
}

export enum ExchangeTypes {
  TOPIC = 'topic',
  DIRECT = 'direct',
  FANOUT = 'fanout',
  DELAYED = 'x-delayed-message',
}

export const EXCHANGES_CONFIG: Record<
  ExchangesNames,
  {
    name: ExchangesNames;
    type: ExchangeTypes;
    options?: Options.AssertExchange;
  }
> = {
  [ExchangesNames.PRODUCT_MANAGER]: {
    name: ExchangesNames.PRODUCT_MANAGER,
    type: ExchangeTypes.TOPIC,
  },
};
