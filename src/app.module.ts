import { Module } from '@nestjs/common';
import { CarsModule } from "./cars/cars.module";
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

//Modulo principal o modulo root: definicion de todos los modulos y submodulos que la aplicación va a tener
@Module({ //Decorador que dice elementos que va a tener
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {} //Clase principal
