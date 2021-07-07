import express from 'express';
import { ZahtevController } from '../controllers/zahtev.controller';

const zahtevRouter = express.Router();

zahtevRouter.route('/dodajZahtev').post(
    (req, res) => new ZahtevController().dodajZahtev(req, res)
)

zahtevRouter.route('/dohvatiZahteve').get(
    (req, res) => new ZahtevController().dohvatiZahteve(req, res)
)

zahtevRouter.route('/ukloniZahtev').post(
    (req, res) => new ZahtevController().ukloniZahtev(req, res)
)

export default zahtevRouter;