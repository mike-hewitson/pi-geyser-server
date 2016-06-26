"use strict";

import * as express from 'express';
import {GeyserController} from '../controller/geyser-controller';

export class GeyserRoutes {
    static init(router: express.Router) {
      router
        .route('/api/temperatures')
        .get(GeyserController.getAllTemperatures);
        // .post(GeyserController.createTodo);

      router
        .route('/api/temperatures/:id')
        .get(GeyserController.getOneTemperature);

      router
        .route('/api/relays')
        .get(GeyserController.getAllRelays);
        // .post(GeyserController.createTodo);

      router
        .route('/api/relays/:id')
        .get(GeyserController.getOneRelay)
        .put(GeyserController.updateRelay);
    }
}
