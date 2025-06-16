import { Controller, Get, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getProfile() {
    return this.usersService.getProfile();
  }

  @Patch('me')
  updateProfile() {
    return this.usersService.updateProfile();
  }

  @Delete('me')
  deleteProfile() {
    return this.usersService.deleteProfile();
  }
}
