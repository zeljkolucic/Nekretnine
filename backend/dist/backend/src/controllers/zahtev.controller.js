"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZahtevController = void 0;
const zahtev_1 = __importDefault(require("../models/zahtev"));
class ZahtevController {
    constructor() {
        this.dodajZahtev = (req, res) => {
            let zahtev = new zahtev_1.default(req.body);
            zahtev.save().then(zahtev => { res.json({ 'message': 'ok' }); }).catch(err => {
                res.json(err);
            });
        };
        this.dohvatiZahteve = (req, res) => {
            zahtev_1.default.find((err, zahtevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(zahtevi);
            });
        };
        this.ukloniZahtev = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            zahtev_1.default.collection.deleteOne({ 'korisnickoIme': korisnickoIme });
        };
    }
}
exports.ZahtevController = ZahtevController;
//# sourceMappingURL=zahtev.controller.js.map