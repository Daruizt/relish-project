export default () => {
    return {
        serviceName: process.env.SERVICE_NAME,
        debug: process.env.DEBUG === 'true',
        port: {
            app: parseInt(process.env.APP_PORT, 10),
        },
        external: {
            relish: {
                url: 'https://jsonplaceholder.typicode.com',
            },
        },
    };
};
