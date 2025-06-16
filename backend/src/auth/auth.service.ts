import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  register(dto: RegisterDto) {
    return { message: `User ${dto.username} registered` };
  }

  login(dto: LoginDto) {
    return { accessToken: `token-for-${dto.username}` };
  }
}
