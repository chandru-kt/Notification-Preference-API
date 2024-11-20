import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';
export declare class UserPreferencesService {
    private userPreferenceModel;
    constructor(userPreferenceModel: Model<UserPreferenceDocument>);
    create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference>;
    findOne(userId: string): Promise<UserPreference>;
    update(userId: string, updateData: UpdateUserPreferenceDto): Promise<UserPreference>;
    remove(userId: string): Promise<void>;
}
