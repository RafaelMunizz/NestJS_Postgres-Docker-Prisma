import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Instalar class-validator e class-transformer no bash do container
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Uma lista com a propriedades que são aceitáveis, no caso, o DTO
      forbidNonWhitelisted: true, // Recusar requisições caso seja enviado algo fora da whitelist
      transform: true, // Transforma automaticamente os dados de uma requisição, de acordo com o DTO
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
