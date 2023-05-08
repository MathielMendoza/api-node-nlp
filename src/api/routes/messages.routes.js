import {Router} from 'express';

export default function ({ MessagesController}) {
    const router = Router();

    router.post('/messages', MessagesController.getAnswer.bind(MessagesController));

    return router;
};