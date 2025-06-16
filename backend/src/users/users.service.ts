import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getProfile() {
    return { id: 1, username: 'demo' };
  }

  updateProfile() {
    return { message: 'Profile updated' };
  }

  deleteProfile() {
    return { message: 'Profile deleted' };
  }
}
