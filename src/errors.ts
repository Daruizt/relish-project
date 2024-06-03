import { ErrorRepository } from '@relish/exception/configuration/error-repository';
import { ErrorTypes } from '@relish/interfaces/types/error-types.enum';

const errorAppRepository = new ErrorRepository();
errorAppRepository.addError(
    ErrorTypes.CUSTOM,
    'CUSTOM-PHOTOS-001',
    404,
    'PHOTOS_NOT_FOUND',
    'Imagen no encontrado',
);
export { errorAppRepository };
