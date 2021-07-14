"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ponuda_controller_1 = require("../controllers/ponuda.controller");
const ponudaRouter = express_1.default.Router();
ponudaRouter.route('/dodajPonudu').post((req, res) => new ponuda_controller_1.PonudaController().dodajPonudu(req, res));
ponudaRouter.route('/dohvatiPonude').post((req, res) => new ponuda_controller_1.PonudaController().dohvatiPonude(req, res));
ponudaRouter.route('/prihvatiPonudu').post((req, res) => new ponuda_controller_1.PonudaController().prihvatiPonudu(req, res));
ponudaRouter.route('/odbijPonudu').post((req, res) => new ponuda_controller_1.PonudaController().odbijPonudu(req, res));
ponudaRouter.route('/odbijOstalePonude').post((req, res) => new ponuda_controller_1.PonudaController().odbijOstalePonude(req, res));
ponudaRouter.route('/dohvatiUgovoreneProdaje').get((req, res) => new ponuda_controller_1.PonudaController().dohvatiUgovoreneProdaje(req, res));
ponudaRouter.route('/proveriDostupnost').post((req, res) => new ponuda_controller_1.PonudaController().proveriDostupnost(req, res));
ponudaRouter.route('/proveriDaLiJeProdata').post((req, res) => new ponuda_controller_1.PonudaController().proveriDaLiJeProdata(req, res));
exports.default = ponudaRouter;
//# sourceMappingURL=ponuda.routes.js.map