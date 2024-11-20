import { PartialType } from '@nestjs/swagger'; // Correct import
import { CreateUserPreferenceDto } from './create-user-preference.dto';

export class UpdateUserPreferenceDto extends PartialType(CreateUserPreferenceDto) {}
