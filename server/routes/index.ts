import * as express from 'express';
import {TodoRoutes} from '../api/todo/routes/todo-routes';
import {GeyserRoutes} from '../api/geyser/routes/geyser-routes';


export class Routes {
   static init(app: express.Application, router: express.Router) {
     GeyserRoutes.init(router);
     

     app.use('/', router);
   }
}
