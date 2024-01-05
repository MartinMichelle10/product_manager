import dotenv from 'dotenv';
import { hostname } from 'os';

import { PRODUCTION } from './env';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./../../package.json');

dotenv.config();

const appName = `product_manager`;

const appId = `${appName}-${hostname()}`;

const config = {
  appId,
  app: {
    id: appId,
    name: appName,
    version: pkg.version,
  },
  isDebug: process.env.DEBUG === 'true',
  version: pkg.version,
  env: process.env.NODE_ENV,
  production: process.env.NODE_ENV === PRODUCTION,
  port: process.env.PORT ? +process.env.PORT : 3000,
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  rabbitMQ: {
    uris: process.env.RABBIT_MQ_URIS
      ? process.env.RABBIT_MQ_URIS.split(',')
      : ['amqp://guest:guest@localhost:5672'],
  },
  apm: {
    isEnabled: process.env.APM_ENABLED
      ? process.env.APM_ENABLED == 'true'
      : true,
    kibanaLogs: {
      isEnabled: process.env.ELASTIC_LOGGER_ENABLED === 'true' || false,
      indexPrefix: process.env.KIBANA_INDEX_PREFIX,
      logLevel: process.env.KIBANA_LOG_LEVEL,
      clientOpts: {
        node: process.env.ELASTIC_SEARCH_NODE_URL,
        auth: {
          username: process.env.ELASTIC_SEARCH_USERNAME,
          password: process.env.ELASTIC_SEARCH_PASSWORD,
        },
      },
    },
    connection: {
      serviceName: 'session-worker',
      serverUrl: `${process.env.APM_URL}:${process.env.APM_PORT}`,
      environment: process.env.NODE_ENV,
    },
  },
};

export default config;
