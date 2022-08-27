import { UserAuthService } from './user.auth.service';
import { SignInDto, SignUpDto } from '../dto/dto';
export declare class UserAuthController {
    private userAuthservice;
    constructor(userAuthservice: UserAuthService);
    signUp(dto: SignUpDto): Promise<{
        accessToken: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        accessToken: string;
    }>;
}
