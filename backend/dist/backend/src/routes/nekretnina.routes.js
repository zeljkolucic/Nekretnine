"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nekretnina_controller_1 = require("../controllers/nekretnina.controller");
const nekretninaRouter = express_1.default.Router();
nekretninaRouter.route('/dohvatiSveNekretnine').get((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiSveNekretnine(req, res));
nekretninaRouter.route('/dohvatiNeodobreneNekretnine').get((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiNeodobreneNekretnine(req, res));
nekretninaRouter.route('/dohvatiOdobreneNekretnine').get((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiOdobreneNekretnine(req, res));
nekretninaRouter.route('/dohvatiPromovisaneNekretnine').get((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiPromovisaneNekretnine(req, res));
nekretninaRouter.route('/dohvatiMojeNekretnine').post((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiMojeNekretnine(req, res));
nekretninaRouter.route('/dohvatiNekretninuPoId').post((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiNekretninuPoId(req, res));
nekretninaRouter.route('/odobriNekretninu').post((req, res) => new nekretnina_controller_1.NekretninaController().odobriNekretninu(req, res));
nekretninaRouter.route('/promovisiNekretninu').post((req, res) => new nekretnina_controller_1.NekretninaController().promovisiNekretninu(req, res));
nekretninaRouter.route('/ukloniIzPromovisanih').post((req, res) => new nekretnina_controller_1.NekretninaController().ukloniIzPromovisanih(req, res));
nekretninaRouter.route('/dodajNekretninu').post((req, res) => new nekretnina_controller_1.NekretninaController().dodajNekretninu(req, res));
nekretninaRouter.route('/pretraziNekretnine').post((req, res) => new nekretnina_controller_1.NekretninaController().pretraziNekretnine(req, res));
exports.default = nekretninaRouter;
//# sourceMappingURL=nekretnina.routes.js.map