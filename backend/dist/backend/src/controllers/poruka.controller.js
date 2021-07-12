"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PorukaController = void 0;
const poruka_1 = __importDefault(require("../models/poruka"));
class PorukaController {
    constructor() {
        this.dohvatiMojePoruke = (req, res) => {
            poruka_1.default.find({}, (err, poruke) => {
                if (err)
                    console.log(err);
                else
                    res.json(poruke);
            });
        };
    }
}
exports.PorukaController = PorukaController;
//# sourceMappingURL=poruka.controller.js.map