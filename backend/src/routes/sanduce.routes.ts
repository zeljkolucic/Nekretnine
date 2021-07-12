import express from 'express';
import { PonudaController } from '../controllers/ponuda.controller';
import { PorukaController } from '../controllers/poruka.controller';

const sanduceRouter = express.Router();

sanduceRouter.route('/dohvatiMojePoruke').post(
    (req, res) => new PorukaController().dohvatiMojePoruke(req, res)
)

sanduceRouter.route('/dodajPonudu').post(
    (req, res) => new PonudaController().dodajPonudu(req, res)
)

export default sanduceRouter;