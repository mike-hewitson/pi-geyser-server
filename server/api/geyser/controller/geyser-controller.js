"use strict";
var geyser_dao_1 = require('../dao/geyser-dao');
var GeyserController = (function () {
    function GeyserController() {
    }
    GeyserController.getAllTemperatures = function (req, res) {
        geyser_dao_1.default['getAllTemperatures']()
            .then(function (temperatures) { return res.status(200).json(temperatures); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    // static createTodo(req: express.Request, res: express.Response):void {
    //     let _todo = req.body;
    //     TodoDAO
    //       ['createTodo'](_todo)
    //       .then(todo => res.status(201).json(todo))
    //       .catch(error => res.status(400).json(error));
    // }
    GeyserController.getOneTemperature = function (req, res) {
        var _id = req.params.id;
        geyser_dao_1.default['getOneTemperature'](_id)
            .then(function (temperature) { return res.status(200).json(temperature); })
            .catch(function (error) { return res.status(400).json(error); });
        // .then(() => res.status(200).end())
        // .catch(error => res.status(400).json(error));
    };
    GeyserController.getAllRelays = function (req, res) {
        geyser_dao_1.default['getAllRelays']()
            .then(function (relays) { return res.status(200).json(relays); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    GeyserController.updateRelay = function (req, res) {
        var _relay = req.body;
        geyser_dao_1.default['updateRelay'](_relay)
            .then(function (relay) { return res.status(201).json(relay); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    GeyserController.getOneRelay = function (req, res) {
        var _id = req.params.id;
        geyser_dao_1.default['getOneRelay'](_id)
            .then(function (relay) { return res.status(200).json(relay); })
            .catch(function (error) { return res.status(400).json(error); });
        // .then(() => res.status(200).end())
        // .catch(error => res.status(400).json(error));
    };
    return GeyserController;
}());
exports.GeyserController = GeyserController;
//# sourceMappingURL=geyser-controller.js.map