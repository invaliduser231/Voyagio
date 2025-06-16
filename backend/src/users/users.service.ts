import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';

export type UserDocument = User & Document;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(username: string, password: string): Promise<UserDocument> {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new this.userModel({ username, passwordHash });
    return user.save();
  }

  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async getProfile(id: string): Promise<Partial<User> | null> {
    return this.userModel.findById(id).select('-passwordHash').lean().exec();
  }

  async updateProfile(
    id: string,
    partial: Partial<User>,
  ): Promise<Partial<User> | null> {
    return this.userModel
      .findByIdAndUpdate(id, partial, { new: true })
      .select('-passwordHash')
      .lean()
      .exec();
  }

  async deleteProfile(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
