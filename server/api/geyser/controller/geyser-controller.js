"use strict";
var geyser_dao_1 = require('../dao/geyser-dao');
var GeyserController = (function () {
    function GeyserController() {
    }
    GeyserController.getAll = function (req, res) {
        geyser_dao_1.default['getAll']()
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
    GeyserController.getOne = function (req, res) {
        var _id = req.params.id;
        geyser_dao_1.default['getOne'](_id)
            .then(function (temperature) { return res.status(200).json(temperature); })
            .catch(function (error) { return res.status(400).json(error); });
        // .then(() => res.status(200).end())
        // .catch(error => res.status(400).json(error));
    };
    return GeyserController;
}());
exports.GeyserController = GeyserController;
//# sourceMappingURL=geyser-controller.js.map