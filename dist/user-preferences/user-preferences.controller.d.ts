import { UserPreferencesService } from './user-preferences.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';
export declare class UserPreferencesController {
    private readonly userPreferencesService;
    constructor(userPreferencesService: UserPreferencesService);
    create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<import("./schemas/user-preference.schema").UserPreference>;
    findOne(userId: string): Promise<import("./schemas/user-preference.schema").UserPreference>;
    update(userId: string, updateData: UpdateUserPreferenceDto): Promise<import("./schemas/user-preference.schema").UserPreference>;
    remove(userId: string): Promise<void>;
}
