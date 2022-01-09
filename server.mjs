import express, { json } from 'express';
import { initialize } from "./repository.mjs";
import routes from './routes.mjs';
import cors from 'cors';

const application = express();
application.use(json());
application.use(cors());
application.use('/api', routes);

application.listen(3000, async () => {
    try {
        await initialize();
    } catch (error) {
        console.error(error);
    }
});
