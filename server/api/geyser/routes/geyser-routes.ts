"use strict";

import * as express from 'express';
import {GeyserController} from '../controller/geyser-controller';

export class GeyserRoutes {
    static init(router: express.Router) {
      router
        .route('/api/temperatures')
        .all(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          next();
        })
        .get(GeyserController.getAllTemperatures);
        // .post(GeyserController.createTodo);

      router
        .route('/api/temperatures/:id')
        .all(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          next();
        })
        .get(GeyserController.getOneTemperature);

      router
        .route('/api/relays')
        .all(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          next();
        })
        .get(GeyserController.getAllRelays);
        // .post(GeyserController.createTodo);

      router
        .route('/api/relays/:id')
        .all(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          next();
        })
        .get(GeyserController.getOneRelay)
        .put(GeyserController.updateRelay);
    }
}
