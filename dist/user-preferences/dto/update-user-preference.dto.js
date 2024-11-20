"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPreferenceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_preference_dto_1 = require("./create-user-preference.dto");
class UpdateUserPreferenceDto extends (0, swagger_1.PartialType)(create_user_preference_dto_1.CreateUserPreferenceDto) {
}
exports.UpdateUserPreferenceDto = UpdateUserPreferenceDto;
//# sourceMappingURL=update-user-preference.dto.js.map