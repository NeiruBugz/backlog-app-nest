import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      'https://backlog-app.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST'],
  });
  await app.listen(8080);
}
bootstrap();
