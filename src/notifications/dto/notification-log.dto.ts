// src/notifications/dto/notification-log.dto.ts
import { IsString, IsEnum, IsOptional, IsDate, IsObject } from 'class-validator';

export class NotificationLogDto {
  @IsString()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: 'marketing' | 'newsletter' | 'updates';

  @IsEnum(['email', 'sms', 'push'])
  channel: 'email' | 'sms' | 'push';

  @IsEnum(['pending', 'sent', 'failed'])
  status: 'pending' | 'sent' | 'failed';

  @IsOptional()
  @IsDate()
  sentAt?: Date;

  @IsOptional()
  @IsString()
  failureReason?: string;

  @IsObject()
  metadata: Record<string, any>;
}
