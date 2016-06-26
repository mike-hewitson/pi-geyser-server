"use strict";

import * as express from 'express';
import {GeyserController} from '../controller/geyser-controller';

export class GeyserRoutes {
    static init(router: express.Router) {
      router
        .route('/api/temperatures')
        .get(GeyserController.getAll);
        // .post(GeyserController.createTodo);

      router
        .route('/api/temperatures/:id')
        .get(GeyserController.getOne);
    }
}
