"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorAppRepository = void 0;
const error_repository_1 = require("./exception/configuration/error-repository");
const error_types_enum_1 = require("./interfaces/types/error-types.enum");
const errorAppRepository = new error_repository_1.ErrorRepository();
exports.errorAppRepository = errorAppRepository;
errorAppRepository.addError(error_types_enum_1.ErrorTypes.CUSTOM, 'CUSTOM-PHOTOS-001', 404, 'PHOTOS_NOT_FOUND', 'Imagen no encontrado');
//# sourceMappingURL=errors.js.map