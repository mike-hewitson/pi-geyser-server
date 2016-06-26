"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var geyser_model_1 = require('../model/geyser-model');
// geyserSchema.static('getAll', ():Promise<any> => {
geyser_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        //   return [{ 'Geyser one': 59.1 }, { 'Geyser two': 48.2 }];
        // }
        var _query = {};
        Temperature
            .find(_query)
            .exec(function (err, temperatures) {
            err ? reject(err)
                : resolve([{ 'Geyser one': 59.1 }, { 'Geyser two': 48.2 }]);
        });
    });
});
geyser_model_1.default.static('getOne', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
            .find(id)
            .exec(function (err, temperatures) {
            err ? reject(err)
                : resolve({ 'Geyser one': 59.1 });
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
// geyserSchema.static('deleteTodo', (id:string):Promise<any> => {
//     return new Promise((resolve:Function, reject:Function) => {
//         if (!_.isString(id)) {
//             return reject(new TypeError('Id is not a valid string.'));
//         }
//         Todo
//           .findByIdAndRemove(id)
//           .exec((err, deleted) => {
//               err ? reject(err)
//                   : resolve();
//           });
//     });
// });
var Temperature = mongoose.model('Temperature', geyser_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Temperature;
//# sourceMappingURL=geyser-dao.js.map