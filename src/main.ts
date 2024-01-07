import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingService } from './logger/logger.service';
import config from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  global.logger = new LoggingService();
  const app = await NestFactory.create(AppModule);

  const configDoc = new DocumentBuilder()
    .setTitle('CRUD example')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .addTag('products')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.port).then(() => {
    global.logger.info(`${config.appId} listening on port ${config.port}`);
  });
}
bootstrap();
