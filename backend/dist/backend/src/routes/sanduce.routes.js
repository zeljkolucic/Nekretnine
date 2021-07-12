"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ponuda_controller_1 = require("../controllers/ponuda.controller");
const poruka_controller_1 = require("../controllers/poruka.controller");
const sanduceRouter = express_1.default.Router();
sanduceRouter.route('/dohvatiMojePoruke').post((req, res) => new poruka_controller_1.PorukaController().dohvatiMojePoruke(req, res));
sanduceRouter.route('/dodajPonudu').post((req, res) => new ponuda_controller_1.PonudaController().dodajPonudu(req, res));
exports.default = sanduceRouter;
//# sourceMappingURL=sanduce.routes.js.map