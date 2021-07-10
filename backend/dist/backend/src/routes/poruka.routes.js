"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poruka_controller_1 = require("../controllers/poruka.controller");
const porukaRouter = express_1.default.Router();
porukaRouter.route('/posaljiPoruku').post((req, res) => new poruka_controller_1.PorukaController().posaljiPoruku(req, res));
porukaRouter.route('/dohvatiMojePoruke').post((req, res) => new poruka_controller_1.PorukaController().dohvatiMojePoruke(req, res));
porukaRouter.route('/dohvatiMojeArhiviranePoruke').post((req, res) => new poruka_controller_1.PorukaController().dohvatiMojeArhiviranePoruke(req, res));
porukaRouter.route('/arhivirajPoruku').post((req, res) => new poruka_controller_1.PorukaController().arhivirajPoruku(req, res));
exports.default = porukaRouter;
//# sourceMappingURL=poruka.routes.js.map