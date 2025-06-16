import {
  Controller,
  Get,
  Patch,
  Delete,
  UseGuards,
  Req,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: { user: { userId: string } }) {
    return this.usersService.getProfile(req.user.userId);
  }

  @Patch('me')
  @UseGuards(JwtAuthGuard)
  updateProfile(
    @Req() req: { user: { userId: string } },
    @Body() body: Partial<User>,
  ) {
    return this.usersService.updateProfile(req.user.userId, body);
  }

  @Delete('me')
  @UseGuards(JwtAuthGuard)
  deleteProfile(@Req() req: { user: { userId: string } }) {
    return this.usersService.deleteProfile(req.user.userId);
  }
}
