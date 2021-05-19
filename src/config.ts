import { CorsOptions } from 'cors';

class Config {

    private _corsOptions: CorsOptions;
    private _port = 3000;

    constructor() {
        this._corsOptions = {};
    }

    set port(value: number) {
        this._port = value;
    }

    get port(): number {
        return this._port;
    }

    get corsOptions(): CorsOptions {
        return this._corsOptions;
    }

    public validateAndApplyArgs(argv: any): boolean {

        if (argv._) {
            if (!argv._.includes('start')) {
                throw new Error(`missing the required command (start)`);
            }
        }

        if (argv.port) {
            const portMin = 1024;
            const portMax = 49151;
            if (argv.port < portMin || argv.port > portMax) {
                throw new Error(`port should be between ${portMin} and ${portMax}`);
            }

            this.port = argv.port;
        }

        if (argv.origin) {
            this._corsOptions.origin = new RegExp(argv.origin);
        }

        if (argv.credentials === undefined) {
            this._corsOptions.credentials = true;
        } else {
            if (argv.credentials) {
                this._corsOptions.credentials = true;
            }
        }

        if (argv.replace === undefined) {
            this._corsOptions.optionsSuccessStatus = 200;
        } else {
            if (argv.replace) {
                this._corsOptions.optionsSuccessStatus = 200;
            }
        }

        return true;
    }
}

export const config = new Config();