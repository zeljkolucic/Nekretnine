import express from 'express';
import { PonudaController } from '../controllers/ponuda.controller';

const ponudaRouter = express.Router();

ponudaRouter.route('/dodajPonudu').post(
    (req, res) => new PonudaController().dodajPonudu(req, res)
)

export default ponudaRouter;