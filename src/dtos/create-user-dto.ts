import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({
        message:'O campo name não pode estar vazio'
    })
    name: string;
    @IsNotEmpty({
        message:'O campo function não pode estar vazio'
    })
    function: string;
}