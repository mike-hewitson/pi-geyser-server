"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var geyser_model_1 = require('../model/geyser-model');
geyser_model_1.default.static('getAllTemperatures', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Temperature
            .find(_query)
            .exec(function (err, temperatures) {
            err ? reject(err)
                : resolve([{ name: 'Geyser one', temperature: 59.1 }, { name: 'Geyser two', temperature: 48.2 }]);
        });
    });
});
geyser_model_1.default.static('getOneTemperature', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
            .find(id)
            .exec(function (err, temperatures) {
            err ? reject(err)
                : resolve({ name: 'Geyser one', temperature: 59.1 });
        });
    });
});
geyser_model_1.default.static('getAllRelays', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Temperature
            .find(_query)
            .exec(function (err, relays) {
            err ? reject(err)
                : resolve([{ name: 'Geyser one', state: true }, { name: 'Geyser two', state: false }]);
        });
    });
});
geyser_model_1.default.static('getOneRelay', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
            .find(id)
            .exec(function (err, relays) {
            err ? reject(err)
                : resolve({ name: 'Geyser one', state: true });
        });
    });
});
// geyserSchema.static('createTodo', (todo:Object):Promise<any> => {
//     return new Promise((resolve:Function, reject:Function) => {
//       if (!_.isObject(todo)) {
//         return reject(new TypeError('Todo is not a valid object.'));
//       }
//       var _todo = new Todo(todo);
//       _todo.save((err, saved) => {
//         err ? reject(err)
//             : resolve(saved);
//       });
//     });
// });
geyser_model_1.default.static('updateRelay', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
            .findByIdAndUpdate(id, { $set: { state: false } })
            .exec(function (err, updated) {
            err ? reject(err)
                : resolve(updated);
        });
    });
});
var Temperature = mongoose.model('Temperature', geyser_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Temperature;
//# sourceMappingURL=geyser-dao.js.map