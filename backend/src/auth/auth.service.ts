import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByUsername(dto.username);
    if (existing) {
      throw new ConflictException('Username taken');
    }
    const user = await this.usersService.create(dto.username, dto.password);
    return {
      id: String(user.id),
      username: user.username,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByUsername(dto.username);
    if (!user) throw new UnauthorizedException();
    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException();
    const payload: { sub: string; username: string } = {
      sub: String(user.id),
      username: user.username,
    };
    return {
      accessToken: await this.jwt.signAsync(payload),
    };
  }
}
