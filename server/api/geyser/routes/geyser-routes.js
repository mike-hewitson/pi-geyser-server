"use strict";
var geyser_controller_1 = require('../controller/geyser-controller');
var GeyserRoutes = (function () {
    function GeyserRoutes() {
    }
    GeyserRoutes.init = function (router) {
        router
            .route('/api/temperatures')
            .get(geyser_controller_1.GeyserController.getAll);
        // .post(GeyserController.createTodo);
        router
            .route('/api/temperatures/:id')
            .get(geyser_controller_1.GeyserController.getOne);
    };
    return GeyserRoutes;
}());
exports.GeyserRoutes = GeyserRoutes;
//# sourceMappingURL=geyser-routes.js.map