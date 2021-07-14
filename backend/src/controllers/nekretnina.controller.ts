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

    dohvatiPromovisaneNekretnine = (req: express.Request, res: express.Response) => {
        Nekretnina.find({'promovisana': true}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

    dohvatiMojeNekretnine = (req: express.Request, res: express.Response) => {
        let korisnickoIme = req.body.korisnickoIme;
        Nekretnina.find({'vlasnik': korisnickoIme}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }

    dohvatiNekretninuPoId = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        Nekretnina.findOne({'idN': idN}, (err, nekretnina) => {
            if(err) console.log(err);
            else res.json(nekretnina);
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
                if(nekretnine) {
                    nekretnina.set('idN', nekretnine.length + 1);
                } else {
                    nekretnina.set('idN', 1);
                }
                nekretnina.save().then((nekretnina) => {
                    res.status(200).json({'message': 'nekretnina dodata'});
                }).catch((err) => {
                    res.status(400).json({'message': err});
                })
            }
        })  
    }

    azurirajNekretninu = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        let naziv = req.body.naziv;
        let adresa = req.body.adresa;
        let opstina = req.body.opstina;
        let grad = req.body.grad;
        let tipNekretnine = req.body.tipNekretnine;
        let brojSpratova = req.body.brojSpratova;
        let sprat = req.body.sprat;
        let povrsina = req.body.povrsina;
        let brojSoba = req.body.brojSoba;
        let namestena = req.body.namestena;
        let tipOglasa = req.body.tipOglasa;
        let cena = req.body.cena;
        let galerija = req.body.galerija;
        Nekretnina.collection.updateOne({'idN' : idN}, {$set: {'naziv': naziv, 'adresa': adresa, 'opstina': opstina,
            'grad': grad, 'tipNekretnine': tipNekretnine, 'brojSpratova': brojSpratova, 'sprat': sprat, 'povrsina': povrsina,
            'brojSoba': brojSoba, 'namestena': namestena, 'tipOglasa': tipOglasa, 'cena': cena, 'galerija': galerija}}, err => {
            if(err) console.log(err);
        }) 
    }

    pretraziNekretnine = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        let grad = req.body.grad;
        let cenaOd = req.body.cenaOd;
        let cenaDo = req.body.cenaDo;
        Nekretnina.find({'naziv': {$regex: naziv}, 'grad': {$regex: grad}, 'cena': {$gt: cenaOd, $lt: cenaDo}}, (err, nekretnine) => {
            if(err) console.log(err);
            else res.json(nekretnine);
        })
    }
    
}