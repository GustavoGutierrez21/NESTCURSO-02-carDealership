import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)   //Para validar para DTO

export class CarsController {

    constructor(
        private readonly carsService: CarsService   //Inyeccion de dependencias (servicios)
    ){}

    @Get()  //Decorador que dice que al tener una solicitud get se hará las funciones
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',new ParseUUIDPipe({ version: '4' })) id: string ) { //Decoración para obtener parametros request
        return this.carsService.findOneById(id)
    }

    @Post()
    createCar( @Body() createCardDto: CreateCarDto ) { 
        return this.carsService.create(createCardDto)
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe ) id: string,
        @Body() updateCarDto: UpdateCarDto )
        { 
            return this.carsService.update(id, updateCarDto);
        }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ){
        return this.carsService.delete(id);
    }

}
