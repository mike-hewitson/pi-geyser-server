"use strict";
var geyser_controller_1 = require('../controller/geyser-controller');
var GeyserRoutes = (function () {
    function GeyserRoutes() {
    }
    GeyserRoutes.init = function (router) {
        router
            .route('/api/temperatures')
            .all(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        })
            .get(geyser_controller_1.GeyserController.getAllTemperatures);
        // .post(GeyserController.createTodo);
        router
            .route('/api/temperatures/:id')
            .all(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        })
            .get(geyser_controller_1.GeyserController.getOneTemperature);
        router
            .route('/api/relays')
            .all(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        })
            .get(geyser_controller_1.GeyserController.getAllRelays);
        // .post(GeyserController.createTodo);
        router
            .route('/api/relays/:id')
            .all(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        })
            .get(geyser_controller_1.GeyserController.getOneRelay)
            .put(geyser_controller_1.GeyserController.updateRelay);
    };
    return GeyserRoutes;
}());
exports.GeyserRoutes = GeyserRoutes;
//# sourceMappingURL=geyser-routes.js.map