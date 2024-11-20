// src/notifications/notifications.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationLogDto } from './dto/notification-log.dto';
import { NotificationsService } from './notifications.service';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // Send Notification
  @Post('send')
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.sendNotification(createNotificationDto);
  }

  // Get Notification Logs
  @Get(':userId/logs')
  async getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationsService.getNotificationLogs(userId);
  }

  // Stats (Optional, if required)
  @Get('stats')
  async getStats() {
    return this.notificationsService.getNotificationStats();
  }
}
