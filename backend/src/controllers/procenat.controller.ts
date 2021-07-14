import express from 'express';
import Procenat from '../models/procenat';

export class ProcenatController {

    dohvatiProcenat = (req: express.Request, res: express.Response) => {
        let namena = req.body.namena;
        Procenat.findOne({'namena': namena}, (err, procenat) => {
            if(err) console.log(err);
            else res.json(procenat);
        })
    }

    azurirajProcenat = (req: express.Request, res: express.Response) => {
        let namena = req.body.namena;
        let iznos = req.body.iznos;
        Procenat.collection.updateOne({'namena': namena}, {$set: {'iznos': iznos}}, err => {
            if(err) console.log(err);
        })
    }

}