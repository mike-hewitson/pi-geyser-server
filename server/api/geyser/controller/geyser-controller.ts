import * as express from 'express';
import GeyserDAO from '../dao/geyser-dao';

export class GeyserController {
  static getAllTemperatures(req: express.Request, res: express.Response):void {
      GeyserDAO
        ['getAllTemperatures']()
        .then(temperatures => res.status(200).json(temperatures))
        .catch(error => res.status(400).json(error));
  }

  // static createTodo(req: express.Request, res: express.Response):void {
  //     let _todo = req.body;

  //     TodoDAO
  //       ['createTodo'](_todo)
  //       .then(todo => res.status(201).json(todo))
  //       .catch(error => res.status(400).json(error));
  // }

  static getOneTemperature(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    GeyserDAO
      ['getOneTemperature'](_id)
      .then(temperature => res.status(200).json(temperature))
      .catch(error => res.status(400).json(error));
      // .then(() => res.status(200).end())
      // .catch(error => res.status(400).json(error));
  }

  static getAllRelays(req: express.Request, res: express.Response):void {
      GeyserDAO
        ['getAllRelays']()
        .then(relays => res.status(200).json(relays))
        .catch(error => res.status(400).json(error));
  }

  static updateRelay(req: express.Request, res: express.Response):void {
      let _relay = req.body;

      GeyserDAO
        ['updateRelay'](_relay)
        .then(relay => res.status(201).json(relay))
        .catch(error => res.status(400).json(error));
  }

  static getOneRelay(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    GeyserDAO
      ['getOneRelay'](_id)
      .then(relay => res.status(200).json(relay))
      .catch(error => res.status(400).json(error));
      // .then(() => res.status(200).end())
      // .catch(error => res.status(400).json(error));
  }
}
