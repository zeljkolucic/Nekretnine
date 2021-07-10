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

}