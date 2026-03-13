import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// Solo aplicar DNS en desarrollo local
if (process.env.NODE_ENV !== "production") {
  try {
    require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);
  } catch(error) {
    console.log("DNS fix not needed in production");
  }
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', /\.vercel\.app$/],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
