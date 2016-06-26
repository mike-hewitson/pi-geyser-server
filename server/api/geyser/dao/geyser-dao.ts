import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import geyserSchema from '../model/geyser-model';

geyserSchema.static('getAllTemperatures', (): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
        let _query = {};

        Temperature
          .find(_query)
          .exec((err, temperatures) => {
              err ? reject(err)
                : resolve([{ name:'Geyser one', temperature: 59.1 }, { name:'Geyser two', temperature: 48.2 }]);
          });
    });
});

geyserSchema.static('getOneTemperature', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
          .find(id)
          .exec((err, temperatures) => {
              err ? reject(err)
                : resolve({ name:'Geyser one', temperature: 59.1 });
          });
    });
});

geyserSchema.static('getAllRelays', (): Promise<any> => {
  return new Promise((resolve: Function, reject: Function) => {
        let _query = {};

        Temperature
          .find(_query)
          .exec((err, relays) => {
              err ? reject(err)
                : resolve([{ name:'Geyser one', state: true }, { name:'Geyser two', state: false }]);
          });
    });
});

geyserSchema.static('getOneRelay', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Temperature
          .find(id)
          .exec((err, relays) => {
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

geyserSchema.static('updateRelay', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Temperature
          .findByIdAndUpdate(id, { $set: { state: false } })
          .exec((err, updated) => {
              err ? reject(err)
                  : resolve(updated);
          });
    });
});

let Temperature = mongoose.model('Temperature', geyserSchema);

export default Temperature;
