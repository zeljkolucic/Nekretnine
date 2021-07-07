import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res) => new KorisnikController().prijava(req, res)
)

korisnikRouter.route('/dohvatiKorisnika').post(
    (req, res) => new KorisnikController().dohvatiKorisnika(req, res)
)

korisnikRouter.route('/dodajKorisnika').post(
    (req, res) => new KorisnikController().dodajKorisnika(req, res)
)

korisnikRouter.route('/dohvatiSveKorisnike').get(
    (req, res) => new KorisnikController().dohvatiSveKorisnike(req, res)
)

korisnikRouter.route('/ukloniKorisnika').post(
    (req, res) => new KorisnikController().ukloniKorisnika(req, res)
)

korisnikRouter.route('/promeniLozinku').post(
    (req, res) => new KorisnikController().promeniLozinku(req, res)
)

korisnikRouter.route('/azurirajKorisnika').post(
    (req, res) => new KorisnikController().azurirajKorisnika(req, res)
)

export default korisnikRouter;