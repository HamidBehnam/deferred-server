import express = require('express');
import http = require('http');
import cors = require('cors');
import { router } from './router';
import { config } from './config';

class Server {

    server?: http.Server;

    constructor() {
    }

    private serverInitialization() {

        const app = express();

        app.use(cors(config.corsOptions));
        app.use(router());

        this.server = http.createServer(app);

        this.server.listen(config.port, () => {
            console.log(`server is listening on port: ${config.port} .....`);
        });

        return this.server;
    }

    start(): http.Server {
        return this.server || this.serverInitialization()
    }
}

export const server = new Server();