import { hostname } from 'os';

import { PRODUCTION } from './env';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./../../package.json');

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
  /// 127.0.0.1
  rabbitMQ: {
    uris: process.env.RABBITMQ_URL
      ? process.env.RABBITMQ_URL.split(',')
      : ['amqp://guest:guest@0.0.0.0:5672'],
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
      serviceName: 'product_manager',
      serverUrl: `${process.env.APM_URL}:${process.env.APM_PORT}`,
      environment: process.env.NODE_ENV,
    },
    database: {
      type: process.env.DIALECT + '',
      host: process.env.HOST,
      port: +process.env.DB_PORT,
      username: process.env.USER_NAME || 'root',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false, // set to true for auto-migration in development, but use with caution in production
      migrationsTableName: 'typeorm_migrations',
      migrations: ['dist/migrations/*{.ts,.js}'],
      // cli: {
      //   migrationsDir: 'src/migrations',
      // },
    },
  },
};

export default config;
