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

nekretninaRouter.route('/dohvatiPromovisaneNekretnine').get(
    (req, res) => new NekretninaController().dohvatiPromovisaneNekretnine(req, res)
)

nekretninaRouter.route('/dohvatiMojeNekretnine').post(
    (req, res) => new NekretninaController().dohvatiMojeNekretnine(req, res)
)

nekretninaRouter.route('/dohvatiNekretninuPoId').post(
    (req, res) => new NekretninaController().dohvatiNekretninuPoId(req, res)
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

nekretninaRouter.route('/azurirajNekretninu').post(
    (req, res) => new NekretninaController().azurirajNekretninu(req, res)
)

nekretninaRouter.route('/pretraziNekretnine').post(
    (req, res) => new NekretninaController().pretraziNekretnine(req, res)
)

nekretninaRouter.route('/dohvatiBrojNekretninaUGradu').post (
    (req, res) => new NekretninaController().dohvatiBrojNekretninaUGradu(req, res)
)

nekretninaRouter.route('/dohvatiBrojKucaKojeSeIzdaju').get(
    (req, res) => new NekretninaController().dohvatiBrojKucaKojeSeIzdaju(req, res)
)

nekretninaRouter.route('/dohvatiBrojKucaKojeSeProdaju').get(
    (req, res) => new NekretninaController().dohvatiBrojKucaKojeSeProdaju(req, res)
)

nekretninaRouter.route('/dohvatiBrojStanovaKojiSeIzdaju').get(
    (req, res) => new NekretninaController().dohvatiBrojStanovaKojiSeIzdaju(req, res)
)

nekretninaRouter.route('/dohvatiBrojStanovaKojiSeProdaju').get(
    (req, res) => new NekretninaController().dohvatiBrojStanovaKojiSeProdaju(req, res)
)

export default nekretninaRouter;