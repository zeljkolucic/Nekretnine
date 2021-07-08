import express from 'express';
import { NekretninaController } from '../controllers/nekretnina.controller';

const nekretninaRouter = express.Router();

nekretninaRouter.route('/dohvatiSveNekretnine').get(
    (req, res) => new NekretninaController().dohvatiSveNekretnine(req, res)
)

nekretninaRouter.route('/dohvatiNeodobreneNekretnine').get(
    (req, res) => new NekretninaController().dohvatiNeodobreneNekretnine(req, res)
)

nekretninaRouter.route('/dohvatiOdobreneNekretnine').get(
    (req, res) => new NekretninaController().dohvatiOdobreneNekretnine(req, res)
)

nekretninaRouter.route('/odobriNekretninu').post(
    (req, res) => new NekretninaController().odobriNekretninu(req, res)
)

nekretninaRouter.route('/promovisiNekretninu').post(
    (req, res) => new NekretninaController().promovisiNekretninu(req, res)
)

nekretninaRouter.route('/ukloniIzPromovisanih').post(
    (req, res) => new NekretninaController().ukloniIzPromovisanih(req, res)
)

nekretninaRouter.route('/dodajNekretninu').post(
    (req, res) => new NekretninaController().dodajNekretninu(req, res)
)

nekretninaRouter.route('/pretraziNekretnine').post(
    (req, res) => new NekretninaController().pretraziNekretnine(req, res)
)

export default nekretninaRouter;