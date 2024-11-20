// src/notifications/notifications.service.ts
import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationLogDto } from './dto/notification-log.dto';

@Injectable()
export class NotificationsService {
  private notificationLogs: NotificationLogDto[] = [];

  // Simulate sending a notification
  async sendNotification(createNotificationDto: CreateNotificationDto): Promise<any> {
    const log: NotificationLogDto = {
      userId: createNotificationDto.userId,
      type: createNotificationDto.type,
      channel: createNotificationDto.channel,
      status: 'sent', // In a real scenario, we might handle pending/failed statuses
      sentAt: new Date(),
      metadata: {
        subject: createNotificationDto.content.subject,
        body: createNotificationDto.content.body,
      },
    };
    this.notificationLogs.push(log);
    return { message: 'Notification sent successfully!', log };
  }

  // Get logs for a specific user
  async getNotificationLogs(userId: string): Promise<NotificationLogDto[]> {
    return this.notificationLogs.filter(log => log.userId === userId);
  }

  // Get overall stats (basic example)
  async getNotificationStats() {
    const totalNotifications = this.notificationLogs.length;
    const sentCount = this.notificationLogs.filter(log => log.status === 'sent').length;
    return { totalNotifications, sentCount };
  }
}
