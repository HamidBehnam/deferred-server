import { Router } from 'express';
import { controller } from './controller';

export const router = (): Router => {

    const router = Router();

    router.get('/:filename', [
        controller.sendFile
    ]);

    router.get('/:filename/:delay', [
        controller.sendFile
    ]);

    return router;
};