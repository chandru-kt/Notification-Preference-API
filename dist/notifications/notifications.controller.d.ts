import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationLogDto } from './dto/notification-log.dto';
import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    sendNotification(createNotificationDto: CreateNotificationDto): Promise<any>;
    getNotificationLogs(userId: string): Promise<NotificationLogDto[]>;
    getStats(): Promise<{
        totalNotifications: number;
        sentCount: number;
    }>;
}
