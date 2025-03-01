import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classController = new ClassController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
