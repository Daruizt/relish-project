import { CustomException } from '@relish/exception/models/custom.exception';

export function catchErrorHandler(
    Exception: typeof CustomException,
    details: string = 'BAD_GATEWAY',
) {
    if (!Exception) {
        throw new Error('No exception provided');
    }

    return (error) => {
        let message: string = error.message;
        if (error.response?.data?.message) {
            message = error.response?.data?.message;
        }

        throw new Exception(details, message);
    };
}

export function ErrorHandler(details: string = 'BAD_REQUEST') {
    return (response) => {
        if (response.data.errors && response.data.errors.length > 0) {
            throw new CustomException(details, response.data.errors[0].message);
        }
    };
}
