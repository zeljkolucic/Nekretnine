import express from 'express';
import { PonudaController } from '../controllers/ponuda.controller';

const ponudaRouter = express.Router();

ponudaRouter.route('/dodajPonudu').post(
    (req, res) => new PonudaController().dodajPonudu(req, res)
)

ponudaRouter.route('/dohvatiPonude').post(
    (req, res) => new PonudaController().dohvatiPonude(req, res)
)

ponudaRouter.route('/prihvatiPonudu').post(
    (req, res) => new PonudaController().prihvatiPonudu(req, res)
)

ponudaRouter.route('/odbijPonudu').post(
    (req, res) => new PonudaController().odbijPonudu(req, res)
)

ponudaRouter.route('/odbijOstalePonude').post(
    (req, res) => new PonudaController().odbijOstalePonude(req, res)
)

ponudaRouter.route('/dohvatiUgovoreneProdaje').get(
    (req, res) => new PonudaController().dohvatiUgovoreneProdaje(req, res)
)

ponudaRouter.route('/proveriDostupnost').post(
    (req, res) => new PonudaController().proveriDostupnost(req, res)
)

ponudaRouter.route('/proveriDaLiJeProdata').post(
    (req, res) => new PonudaController().proveriDaLiJeProdata(req, res)
)

export default ponudaRouter;