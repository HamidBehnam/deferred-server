import { Request, Response } from 'express';

class Controller {

    sendFile(request: Request, response: Response) {

        const delay = + request.params.delay || 0;

        setTimeout(() => {
            response.sendFile(`${request.params.filename}`, {
                root: process.cwd()
            });
        }, delay);
    }
}

export const controller = new Controller();