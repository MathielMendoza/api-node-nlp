import {Router} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import morgan from "morgan";

export default function ({MessagesRoutes}) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(morgan('dev'))
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use('/es', MessagesRoutes);

    router.use('/api/v1', apiRoute);

    return router;
}