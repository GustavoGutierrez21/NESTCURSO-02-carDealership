import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()   //Se puede inyectar
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id: string ) {

        const car = this.cars.find( car => car.id === id );

        if( !car ) throw new NotFoundException(`Car with id ${ id } not found`);   //throw para marcar un error, new para crear una nueva instancia
        
        return car;
    }

    create( createCarDto: CreateCarDto ) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push( car );

        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findOneById ( id );    //No repetir código, llamar la busqueda de id

        if( updateCarDto.id && updateCarDto != id)  //Validación id, dar mensaje de error
            throw new BadRequestException(`Car id is not valid inside body`)

        this.cars = this.cars.map( car => {

            if( car.id === id) {
                carDB = {
                    ...carDB,   //Mandas el objeto original
                    ...updateCarDto,    //Sobre escribe los cambios
                    id  //mantiene el id original para no cambios
                }
                return carDB;
            }

            return car;
        })

        return carDB;
    }

    delete( id: string) {
        const car = this.findOneById ( id );
        this.cars = this.cars.filter(car => car.id !== id)
    }

    fillCarsWithSeedDate( cars: Car[] ) {
        this.cars = cars;
    }

}
