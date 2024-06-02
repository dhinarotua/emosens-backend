require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');
const loadModel = require('../services/loadModel');

(async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*'],
            },
        },
    })

    server.route(routes);
    
    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
})();