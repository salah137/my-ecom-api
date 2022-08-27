import { Body, Controller, Post } from '@nestjs/common';
import { UserAuthService } from './user.auth.service';
import { SignInDto, SignUpDto } from '../dto/dto';

@Controller('user/auth')
export class UserAuthController {
    constructor(private userAuthservice : UserAuthService){}


    @Post("/signUp")
    signUp(@Body() dto : SignUpDto){
        return this.userAuthservice.signUp(dto)
    }


    @Post("/signIn")
    signIn(@Body() dto : SignInDto){
        return this.userAuthservice.signIn(dto)
    }
}
