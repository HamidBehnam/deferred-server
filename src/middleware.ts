import morgan, { StreamOptions } from "morgan";
import chalk from 'chalk';

class MorganMiddleware {
    private stream: StreamOptions = {
        write: (message) => console.log(chalk.magenta(message)),
    };

    private skip() {
        // Note: if you're using webpack and you're passing --env NODE_ENV=xyz it'll also set the process.env.NODE_ENV
        const env = process.env.NODE_ENV || "development";
        return env !== "development";
    }

    private _morgan = morgan(
        ":method :url :status :res[content-length] - :response-time ms",
        {
            stream: this.stream,
            skip: this.skip
        }
    );

    get morgan() {
        return this._morgan;
    }
}

export const morganMiddleware = new MorganMiddleware();
