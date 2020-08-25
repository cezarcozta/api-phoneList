import { Router } from 'express';

//import sessionsRouter from './sessions.routes';
import contactsRouter from './contacts.routes';

const routes = Router();

//routes.use('/sessions', sessionsRouter);
routes.use('/contacts', contactsRouter);

export default routes;
