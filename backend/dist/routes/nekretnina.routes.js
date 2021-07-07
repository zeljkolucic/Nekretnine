"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nekretnina_controller_1 = require("../controllers/nekretnina.controller");
const nekretninaRouter = express_1.default.Router();
nekretninaRouter.route('/dohvatiNeodobreneNekretnine').get((req, res) => new nekretnina_controller_1.NekretninaController().dohvatiNeodobreneNekretnine(req, res));
nekretninaRouter.route('/odobriNekretninu').post((req, res) => new nekretnina_controller_1.NekretninaController().odobriNekretninu(req, res));
nekretninaRouter.route('/dodajNekretninu').post((req, res) => new nekretnina_controller_1.NekretninaController().dodajNekretninu(req, res));
exports.default = nekretninaRouter;
//# sourceMappingURL=nekretnina.routes.js.map