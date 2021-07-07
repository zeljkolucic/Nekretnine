import express from 'express';
import Zahtev from '../models/zahtev';

export class ZahtevController {

    dodajZahtev = (req: express.Request, res: express.Response) => {
        let zahtev = new Zahtev(req.body);
        zahtev.save().then(zahtev => {res.json({'message': 'ok'})}).catch(err => {
            res.json(err);
        })
    }

    dohvatiZahteve = (req: express.Request, res: express.Response) => {
        Zahtev.find((err, zahtevi) => {
            if(err) console.log(err);
            else res.json(zahtevi);
        })
    }

    ukloniZahtev = (req: express.Request, res: express.Response) => {
        let korisnickoIme = req.body.korisnickoIme;
        Zahtev.collection.deleteOne({'korisnickoIme': korisnickoIme});
    }

}