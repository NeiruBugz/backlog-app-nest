import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const DEV_PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(DEV_PORT);
}
bootstrap();
