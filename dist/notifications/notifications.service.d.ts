import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationLogDto } from './dto/notification-log.dto';
export declare class NotificationsService {
    private notificationLogs;
    sendNotification(createNotificationDto: CreateNotificationDto): Promise<any>;
    getNotificationLogs(userId: string): Promise<NotificationLogDto[]>;
    getNotificationStats(): Promise<{
        totalNotifications: number;
        sentCount: number;
    }>;
}
