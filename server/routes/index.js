"use strict";
var geyser_routes_1 = require('../api/geyser/routes/geyser-routes');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        geyser_routes_1.GeyserRoutes.init(router);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map