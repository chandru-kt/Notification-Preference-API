import { IsEmail, IsEnum, IsObject, IsString } from 'class-validator';

export class CreateUserPreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };

  @IsString()
  timezone: string;
}
