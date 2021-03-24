import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FireEventService } from './fireEventService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const fireService = app.get(FireEventService);
  fireService.fireEvent()
}
bootstrap();
