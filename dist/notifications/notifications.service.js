"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
let NotificationsService = class NotificationsService {
    constructor() {
        this.notificationLogs = [];
    }
    async sendNotification(createNotificationDto) {
        const log = {
            userId: createNotificationDto.userId,
            type: createNotificationDto.type,
            channel: createNotificationDto.channel,
            status: 'sent',
            sentAt: new Date(),
            metadata: {
                subject: createNotificationDto.content.subject,
                body: createNotificationDto.content.body,
            },
        };
        this.notificationLogs.push(log);
        return { message: 'Notification sent successfully!', log };
    }
    async getNotificationLogs(userId) {
        return this.notificationLogs.filter(log => log.userId === userId);
    }
    async getNotificationStats() {
        const totalNotifications = this.notificationLogs.length;
        const sentCount = this.notificationLogs.filter(log => log.status === 'sent').length;
        return { totalNotifications, sentCount };
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map