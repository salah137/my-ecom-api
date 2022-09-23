import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    appId : number
}


export class SignInDto {
    
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    appId : number
}

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    name : string
    
    image : string

    @IsNotEmpty()
    @IsNumber()
    price : string

    @IsNotEmpty()
    @IsNumber()
    appId : number
}

export class UpdatedProductDto {
    @IsNotEmpty()
    
    id : number

    @IsNotEmpty()
    @IsString()
    name : string
    
    image : string

    @IsNotEmpty()
    @IsNumber()
    price : string

}