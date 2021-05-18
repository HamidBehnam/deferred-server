import { Request, Response } from 'express';

class Controller {

    sendFile(request: Request, response: Response) {
        setTimeout(() => {
            response.sendFile(`${request.params.filename}`, {
                root: process.cwd()
            });
        }, + request.params.delay);
    }
}

export const controller = new Controller();