import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import geyserSchema from '../model/geyser-model';

// geyserSchema.static('getAll', ():Promise<any> => {
geyserSchema.static('getAll', (): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
  //   return [{ 'Geyser one': 59.1 }, { 'Geyser two': 48.2 }];
  // }
        let _query = {};

        Temperature
          .find(_query)
          .exec((err, temperatures) => {
              err ? reject(err)
                : resolve([{ 'Geyser one': 59.1 }, { 'Geyser two': 48.2 }]);
          });
    });
});

geyserSchema.static('getOne', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
          .find(id)
          .exec((err, temperatures) => {
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

let Temperature = mongoose.model('Temperature', geyserSchema);

export default Temperature;
