import express from 'express';
import Ponuda from '../models/ponuda';


export class PonudaController {

    dodajPonudu = (req: express.Request, res: express.Response) => {
        Ponuda.find({}, (err, ponude) => {
            if(err) console.log(err);
            else {
                let ponuda = new Ponuda(req.body);
                if(ponude) {
                    ponuda.set('idP', ponude.length + 1);
                } else {
                    ponuda.set('idP', 1);
                }
                ponuda.save().then((ponuda) => {
                    res.status(200).json({'message': 'ponuda dodata'});
                }).catch((err) => {
                    res.status(400).json({'message': err});
                })
            }
        })
    }

    dohvatiPonude = (req: express.Request, res: express.Response) => {
        let korisnickoIme = req.body.korisnickoIme;
        Ponuda.find({'vlasnik': korisnickoIme, 'pregledana': false}, (err, ponude) => {
            if(err) console.log(err);
            else res.json(ponude);
        })
    }

    prihvatiPonudu = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP;
        Ponuda.collection.updateOne({'idP': idP}, {$set: {'pregledana': true, 'prihvacena': true}}, err => {
            if(err) console.log(err);
        })
    }

    odbijPonudu = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP;
        Ponuda.collection.updateOne({'idP': idP}, {$set: {'pregledana': true, 'prihvacena': false}}, err => {
            if(err) console.log(err);
        })
    }

    odbijOstalePonude = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        Ponuda.collection.updateMany({'idN': idN, 'pregledana': false}, {$set: {'pregledana': true, 'prihvacena': false}}, err => {
            if(err) console.log(err);
        })
    }

}