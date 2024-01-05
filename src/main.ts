import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingService } from './logger/logger.service';
import config from './config';

async function bootstrap() {
  global.logger = new LoggingService();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port).then(() => {
    global.logger.info(`${config.appId} listening on port ${config.port}`);
  });
}
bootstrap();
