import elasticEcsFormat from '@elastic/ecs-winston-format';
import {
  createLogger as winstonCreateLogger,
  transports as winstonTransports,
  LoggerOptions as WinstonLoggerOptions,
  format,
  Logger as winstonLogger,
  LeveledLogMethod,
} from 'winston';
import { Agent as ElasticApmAgent } from 'elastic-apm-node';
import { ElasticsearchTransport } from 'winston-elasticsearch';
import { Injectable } from '@nestjs/common';

import config from '../config';

const { combine, timestamp, colorize, cli, errors, prettyPrint } = format;

const winstonFormat = combine(timestamp(), colorize(), cli());
const exceptionFormat = combine(
  timestamp(),
  colorize(),
  cli(),
  errors({ stack: true }),
  prettyPrint(),
);

@Injectable()
export class LoggingService {
  private _logger: winstonLogger;
  public info: LeveledLogMethod;
  public debug: LeveledLogMethod;
  public error: LeveledLogMethod;
  public warn: LeveledLogMethod;

  constructor() {
    const transports: WinstonLoggerOptions['transports'] = [
      new winstonTransports.Console({
        level: config.logger.level,
        format: winstonFormat,
      }),
      new winstonTransports.Console({
        level: 'error',
        format: exceptionFormat,
      }),
    ];
    const loggerConfiguration: WinstonLoggerOptions = {
      defaultMeta: { service: config.app.name },
      transports,
      exceptionHandlers: [
        new winstonTransports.Console({ format: exceptionFormat }),
      ],
    };

    this._logger = winstonCreateLogger(loggerConfiguration);
    this.info = this._logger.info.bind(this._logger);
    this.debug = this._logger.debug.bind(this._logger);
    this.warn = this._logger.warn.bind(this._logger);
  }

  apm?: ElasticApmAgent;

  setApm(apm: ElasticApmAgent): void {
    this.apm = apm;
    const { indexPrefix, logLevel, clientOpts } = config.apm.kibanaLogs;
    const { serviceName } = config.apm.connection;

    if (config.apm.kibanaLogs.isEnabled) {
      const elasticsearchTransport = new ElasticsearchTransport({
        apm: this.apm,
        indexPrefix: indexPrefix,
        level: logLevel,
        clientOpts: clientOpts,
        source: serviceName,
        format: elasticEcsFormat({
          convertReqRes: true,
          apmIntegration: true,
          convertErr: true,
        }),
      });

      this._logger.add(elasticsearchTransport);
    }
  }
}
