// src/notifications/dto/create-notification.dto.ts
import { IsString, IsEnum, IsNotEmpty, IsObject } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: 'marketing' | 'newsletter' | 'updates';

  @IsEnum(['email', 'sms', 'push'])
  channel: 'email' | 'sms' | 'push';

  @IsObject()
  content: {
    subject: string;
    body: string;
  };
}
