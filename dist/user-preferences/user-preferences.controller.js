"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferencesController = void 0;
const common_1 = require("@nestjs/common");
const user_preferences_service_1 = require("./user-preferences.service");
const create_user_preference_dto_1 = require("./dto/create-user-preference.dto");
const update_user_preference_dto_1 = require("./dto/update-user-preference.dto");
let UserPreferencesController = class UserPreferencesController {
    constructor(userPreferencesService) {
        this.userPreferencesService = userPreferencesService;
    }
    async create(createUserPreferenceDto) {
        return this.userPreferencesService.create(createUserPreferenceDto);
    }
    async findOne(userId) {
        return this.userPreferencesService.findOne(userId);
    }
    async update(userId, updateData) {
        return this.userPreferencesService.update(userId, updateData);
    }
    async remove(userId) {
        return this.userPreferencesService.remove(userId);
    }
};
exports.UserPreferencesController = UserPreferencesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_preference_dto_1.CreateUserPreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_preference_dto_1.UpdateUserPreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "remove", null);
exports.UserPreferencesController = UserPreferencesController = __decorate([
    (0, common_1.Controller)('api/preferences'),
    __metadata("design:paramtypes", [user_preferences_service_1.UserPreferencesService])
], UserPreferencesController);
//# sourceMappingURL=user-preferences.controller.js.map