import express from 'express';
import { NekretninaController } from '../controllers/nekretnina.controller';

const nekretninaRouter = express.Router();

nekretninaRouter.route('/dohvatiNeodobreneNekretnine').get(
    (req, res) => new NekretninaController().dohvatiNeodobreneNekretnine(req, res)
)

nekretninaRouter.route('/odobriNekretninu').post(
    (req, res) => new NekretninaController().odobriNekretninu(req, res)
)

nekretninaRouter.route('/dodajNekretninu').post(
    (req, res) => new NekretninaController().dodajNekretninu(req, res)
)

export default nekretninaRouter;