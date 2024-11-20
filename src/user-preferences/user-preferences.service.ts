import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    const userPref = await this.userPreferenceModel.findOne({ userId });
    if (!userPref) throw new NotFoundException('User preference not found');
    return userPref;
  }

  async update(userId: string, updateData: UpdateUserPreferenceDto): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updateData, { new: true });
  }

  async remove(userId: string): Promise<void> {
    await this.userPreferenceModel.deleteOne({ userId });
  }
}
