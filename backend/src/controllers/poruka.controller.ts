import express from 'express';
import Poruka from '../models/poruka';

export class PorukaController {

    posaljiPoruku = (req: express.Request, res: express.Response) => {
        Poruka.find({}, (err, poruke) => {
            if(err) console.log(err);
            else {
                let poruka = new Poruka(req.body);
                if(poruke) {
                    poruka.set('idP', poruke.length + 1);
                } else {
                    poruka.set('idP', 1);
                }
                poruka.save().then((poruka) => {
                    res.status(200).json({'message': 'poruka dodata'});
                }).catch((err) => {
                    res.status(400).json({'message': err});
                })
            }
        })
    }

    dohvatiMojePoruke = (req: express.Request, res: express.Response) => {
        let korisnickoIme = req.body.korisnickoIme;
        Poruka.find({'primalac': korisnickoIme, 'arhivirana': false}, (err, poruke) => {
            if(err) console.log(err);
            else res.json(poruke);
        })
    }

    dohvatiMojeArhiviranePoruke = (req: express.Request, res: express.Response) => {
        let korisnickoIme = req.body.korisnickoIme;
        Poruka.find({'primalac': korisnickoIme, 'arhivirana': true}, (err, poruke) => {
            if(err) console.log(err);
            else res.json(poruke);
        })
    }

    arhivirajPoruku = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP;
        Poruka.collection.updateOne({'idP': idP}, {$set: {'arhivirana': true}}, err => {
            if(err) console.log(err);
        })
    }

}