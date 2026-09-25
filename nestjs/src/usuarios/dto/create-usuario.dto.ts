import { IsEmail, IsNotEmpty, IsString, MinLength, minLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
     nome : string;

    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    senha : string;
}
