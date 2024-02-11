import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString()
    readonly brand: string;

    @IsString()
    //@MinLength(3)   //Minimo de 3 caracteres
    readonly model: string;

}