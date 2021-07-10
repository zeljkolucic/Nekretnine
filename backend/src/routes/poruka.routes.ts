import express from 'express';
import { PorukaController } from '../controllers/poruka.controller';

const porukaRouter = express.Router();

porukaRouter.route('/posaljiPoruku').post(
    (req, res) => new PorukaController().posaljiPoruku(req, res)
)

porukaRouter.route('/dohvatiMojePoruke').post(
    (req, res) => new PorukaController().dohvatiMojePoruke(req, res)
)

porukaRouter.route('/dohvatiMojeArhiviranePoruke').post(
    (req, res) => new PorukaController().dohvatiMojeArhiviranePoruke(req, res)
)

porukaRouter.route('/arhivirajPoruku').post(
    (req, res) => new PorukaController().arhivirajPoruku(req, res)
)

export default porukaRouter;