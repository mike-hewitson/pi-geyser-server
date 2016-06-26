import * as express from 'express';
import GeyserDAO from '../dao/geyser-dao';

export class GeyserController {
  static getAll(req: express.Request, res: express.Response):void {
      GeyserDAO
        ['getAll']()
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

  static getOne(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    GeyserDAO
      ['getOne'](_id)
      .then(temperature => res.status(200).json(temperature))
      .catch(error => res.status(400).json(error));
      // .then(() => res.status(200).end())
      // .catch(error => res.status(400).json(error));
  }
}
