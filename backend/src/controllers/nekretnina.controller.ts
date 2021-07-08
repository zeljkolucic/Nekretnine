import express from 'express';
import Nekretnina from '../models/nekretnina';

export class NekretninaController {

    dohvatiSveNekretnine = (req: express.Request, res: express.Response) => {
        Nekretnina.find({}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

    dohvatiNeodobreneNekretnine = (req: express.Request, res: express.Response) => {
        Nekretnina.find({'odobrena': false}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

    dohvatiOdobreneNekretnine = (req: express.Request, res: express.Response) => {
        Nekretnina.find({'odobrena': true}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

    odobriNekretninu = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        Nekretnina.collection.updateOne({'idN': idN}, {$set: {'odobrena': true}}, err => {
            if(err) console.log(err);
        });
    }

    promovisiNekretninu = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        Nekretnina.collection.updateOne({'idN': idN}, {$set: {'promovisana': true}}, err => {
            if(err) console.log(err);
        });
    }

    ukloniIzPromovisanih = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        Nekretnina.collection.updateOne({'idN': idN}, {$set: {'promovisana': false}}, err => {
            if(err) console.log(err);
        });
    }

    dodajNekretninu = (req: express.Request, res: express.Response) => {
        Nekretnina.find({}, (err, nekretnine) => {
            if(err) console.log(err);
            else {
                let nekretnina = new Nekretnina(req.body);
                nekretnina.set('idN', nekretnine.length + 1);
                nekretnina.save().then((nekretnina) => {
                    res.status(200).json({'message': 'nekretnina dodata'});
                }).catch((err) => {
                    res.status(400).json({'message': err});
                })
            }
        })  
    }

    pretraziNekretnine = (req: express.Request, res: express.Response) => {
        let grad = req.body.grad;
        let cenaOd = req.body.cenaOd;
        let cenaDo = req.body.cenaDo;
        Nekretnina.find({'grad': {$regex: grad}, 'cena': {$gt: cenaOd, $lt: cenaDo}}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

}