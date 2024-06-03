"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        serviceName: process.env.SERVICE_NAME,
        debug: process.env.DEBUG === 'true',
        port: {
            app: parseInt(process.env.APP_PORT, 10),
        },
        external: {
            relish: {
                url: process.env.RELISH_API_URL,
            },
        },
    };
};
//# sourceMappingURL=env.config.js.map