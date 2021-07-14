import express from 'express';
import { ProcenatController } from '../controllers/procenat.controller';

const procenatRouter = express.Router();

procenatRouter.route('/dohvatiProcenat').post(
    (req, res) => new ProcenatController().dohvatiProcenat(req, res)
)

procenatRouter.route('/azurirajProcenat').post(
    (req, res) => new ProcenatController().azurirajProcenat(req, res)
)

export default procenatRouter;