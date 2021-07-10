"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PorukaController = void 0;
const poruka_1 = __importDefault(require("../models/poruka"));
class PorukaController {
    constructor() {
        this.posaljiPoruku = (req, res) => {
            poruka_1.default.find({}, (err, poruke) => {
                if (err)
                    console.log(err);
                else {
                    let poruka = new poruka_1.default(req.body);
                    if (poruke) {
                        poruka.set('idP', poruke.length + 1);
                    }
                    else {
                        poruka.set('idP', 1);
                    }
                    poruka.save().then((poruka) => {
                        res.status(200).json({ 'message': 'poruka dodata' });
                    }).catch((err) => {
                        res.status(400).json({ 'message': err });
                    });
                }
            });
        };
        this.dohvatiMojePoruke = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            poruka_1.default.find({ 'primalac': korisnickoIme, 'arhivirana': false }, (err, poruke) => {
                if (err)
                    console.log(err);
                else
                    res.json(poruke);
            });
        };
        this.dohvatiMojeArhiviranePoruke = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            poruka_1.default.find({ 'primalac': korisnickoIme, 'arhivirana': true }, (err, poruke) => {
                if (err)
                    console.log(err);
                else
                    res.json(poruke);
            });
        };
        this.arhivirajPoruku = (req, res) => {
            let idP = req.body.idP;
            poruka_1.default.collection.updateOne({ 'idP': idP }, { $set: { 'arhivirana': true } }, err => {
                if (err)
                    console.log(err);
            });
        };
    }
}
exports.PorukaController = PorukaController;
//# sourceMappingURL=poruka.controller.js.map