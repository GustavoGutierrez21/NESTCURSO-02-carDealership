import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  //Crea la aplicación de nest

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,   //Se guarda solo lo que se requiere, si hay más lo ignora
      forbidNonWhitelisted: true, //Si mandas más marca error que no existe
      }) 
  )

  await app.listen(3000); //Puerto por defecto a correr
}
bootstrap();
