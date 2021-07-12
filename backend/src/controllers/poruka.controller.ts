import express from 'express';
import Poruka from '../models/poruka';

export class PorukaController {

    dohvatiMojePoruke = (req: express.Request, res: express.Response) => {
        Poruka.find({}, (err, poruke) => {
            if(err) console.log(err);
            else res.json(poruke);
        })
    }

}