"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonudaController = void 0;
const ponuda_1 = __importDefault(require("../models/ponuda"));
class PonudaController {
    constructor() {
        this.dodajPonudu = (req, res) => {
            ponuda_1.default.find({}, (err, ponude) => {
                if (err)
                    console.log(err);
                else {
                    let ponuda = new ponuda_1.default(req.body);
                    if (ponude) {
                        ponuda.set('idP', ponude.length + 1);
                    }
                    else {
                        ponuda.set('idP', 1);
                    }
                    ponuda.save().then((ponuda) => {
                        res.status(200).json({ 'message': 'ponuda dodata' });
                    }).catch((err) => {
                        res.status(400).json({ 'message': err });
                    });
                }
            });
        };
        this.dohvatiPonude = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            ponuda_1.default.find({ 'vlasnik': korisnickoIme, 'pregledana': false }, (err, ponude) => {
                if (err)
                    console.log(err);
                else
                    res.json(ponude);
            });
        };
        this.prihvatiPonudu = (req, res) => {
            let idP = req.body.idP;
            ponuda_1.default.collection.updateOne({ 'idP': idP }, { $set: { 'pregledana': true, 'prihvacena': true } }, err => {
                if (err)
                    console.log(err);
            });
        };
        this.odbijPonudu = (req, res) => {
            let idP = req.body.idP;
            ponuda_1.default.collection.updateOne({ 'idP': idP }, { $set: { 'pregledana': true, 'prihvacena': false } }, err => {
                if (err)
                    console.log(err);
            });
        };
        this.odbijOstalePonude = (req, res) => {
            let idN = req.body.idN;
            ponuda_1.default.collection.updateMany({ 'idN': idN, 'pregledana': false }, { $set: { 'pregledana': true, 'prihvacena': false } }, err => {
                if (err)
                    console.log(err);
            });
        };
        this.dohvatiUgovoreneProdaje = (req, res) => {
            ponuda_1.default.find({ 'prihvacena': true }, (err, ugovoreneProdaje) => {
                if (err)
                    console.log(err);
                else
                    res.json(ugovoreneProdaje);
            });
        };
        this.proveriDostupnost = (req, res) => {
            let idN = req.body.idN;
            let datumOd = req.body.datumOd;
            let datumDo = req.body.datumDo;
            console.log(datumOd + ' ' + datumDo);
            ponuda_1.default.find({ 'idN': idN, 'prihvacena': true, $or: [
                    { 'datumOd': { $gte: datumOd, $lte: datumDo } },
                    { 'datumDo': { $gte: datumOd, $lte: datumDo } },
                    { $and: [{ 'datumOd': { $lte: datumOd }, 'datumDo': { $gte: datumDo } }] },
                    { $and: [{ 'datumOd': { $gte: datumOd }, 'datumDo': { $lte: datumDo } }] }
                ] }, (err, ponude) => {
                if (err)
                    console.log(err);
                else {
                    if (ponude.length != 0) {
                        res.status(200).json({ 'poruka': 'nedostupna' });
                    }
                    else {
                        res.status(200).json({ 'poruka': 'dostupna' });
                    }
                }
            });
        };
        this.proveriDaLiJeProdata = (req, res) => {
            let idN = req.body.idN;
            ponuda_1.default.findOne({ 'idN': idN, 'prihvacena': true }, (err, ponuda) => {
                if (err)
                    console.log(err);
                else {
                    if (ponuda != null) {
                        res.status(200).json({ 'poruka': 'prodata' });
                    }
                    else {
                        res.status(200).json({ 'poruka': 'dostupna' });
                    }
                }
            });
        };
    }
}
exports.PonudaController = PonudaController;
//# sourceMappingURL=ponuda.controller.js.map