import { Router } from 'express';
import { controller } from './controller';

export const router = (): Router => {

    const router = Router();

    router.get('/:filename/:delay', [
        controller.sendFile
    ]);

    return router;
};