import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
