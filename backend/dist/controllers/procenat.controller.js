"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcenatController = void 0;
const procenat_1 = __importDefault(require("../models/procenat"));
class ProcenatController {
    constructor() {
        this.dohvatiProcenat = (req, res) => {
            let namena = req.body.namena;
            procenat_1.default.findOne({ 'namena': namena }, (err, procenat) => {
                if (err)
                    console.log(err);
                else
                    res.json(procenat);
            });
        };
        this.azurirajProcenat = (req, res) => {
            let namena = req.body.namena;
            let iznos = req.body.iznos;
            procenat_1.default.collection.updateOne({ 'namena': namena }, { $set: { 'iznos': iznos } }, err => {
                if (err)
                    console.log(err);
            });
        };
    }
}
exports.ProcenatController = ProcenatController;
//# sourceMappingURL=procenat.controller.js.map