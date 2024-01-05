import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces';

import config from '../config';
import { EXCHANGES_CONFIG } from './config/exchanges';

export const RMQ_CONFIG: RabbitMQConfig = {
  exchanges: Object.values(EXCHANGES_CONFIG),
  uri: config.rabbitMQ.uris,
  channels: {
    'channel-1': {
      prefetchCount: 15,
      default: true,
    },
  },
  prefetchCount: 5,
  connectionInitOptions: {
    wait: true,
    timeout: 10000,
    reject: false,
  },
};
