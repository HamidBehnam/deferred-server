import express = require('express');
import http = require('http');
import cors = require('cors');
import { router } from './router';
import { config } from './config';
import { morganMiddleware } from './middleware';
import chalk from 'chalk';

class Server {

    server?: http.Server;

    constructor() {
    }

    private serverInitialization() {

        const app = express();

        app.use(cors(config.corsOptions));
        app.use(morganMiddleware.morgan)
        app.use(router());

        this.server = http.createServer(app);

        this.server.listen(config.port, () => {
            console.log(chalk.green('Server Initialization: Success!'));
            console.log(chalk.green(`Server is listening on port: ${config.port} ...`));
        });

        return this.server;
    }

    start(): http.Server {

        console.log(chalk.green('Server Initialization: Started ...'));

        return this.server || this.serverInitialization()
    }
}

export const server = new Server();