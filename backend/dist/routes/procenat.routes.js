"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const procenat_controller_1 = require("../controllers/procenat.controller");
const procenatRouter = express_1.default.Router();
procenatRouter.route('/dohvatiProcenat').post((req, res) => new procenat_controller_1.ProcenatController().dohvatiProcenat(req, res));
procenatRouter.route('/azurirajProcenat').post((req, res) => new procenat_controller_1.ProcenatController().azurirajProcenat(req, res));
exports.default = procenatRouter;
//# sourceMappingURL=procenat.routes.js.map