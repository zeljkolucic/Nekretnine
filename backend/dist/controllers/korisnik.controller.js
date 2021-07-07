"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            let tip = req.body.tip;
            korisnik_1.default.findOne({ 'korisnickoIme': korisnickoIme, 'lozinka': lozinka, 'tip': tip }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiKorisnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            korisnik_1.default.findOne({ 'korisnickoIme': korisnickoIme }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dodajKorisnika = (req, res) => {
            let korisnik = new korisnik_1.default(req.body);
            korisnik.save().then(korisnik => { res.json({ 'message': 'ok' }); }).catch(err => {
                res.json(err);
            });
        };
        this.dohvatiSveKorisnike = (req, res) => {
            korisnik_1.default.find({ 'tip': 'registrovani korisnik' }, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.azurirajKorisnika = (req, res) => {
            let staroKorisnickoIme = req.body.staroKorisnickoIme;
            let novoKorisnickoIme = req.body.novoKorisnickoIme;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let lozinka = req.body.lozinka;
            let slika = req.body.slika;
            let adresa = req.body.adresa;
            let gradDrzava = req.body.gradDrzava;
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': staroKorisnickoIme }, { $set: { 'korisnickoIme': novoKorisnickoIme, 'lozinka': lozinka,
                    'ime': ime, 'prezime': prezime, 'slika': slika, 'adresa': adresa, 'gradDrzava': gradDrzava } }, err => {
                if (err)
                    console.log(err);
            });
        };
        this.ukloniKorisnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            korisnik_1.default.collection.deleteOne({ 'korisnickoIme': korisnickoIme });
        };
        this.promeniLozinku = (req, res) => {
            let novaLozinka = req.body.novaLozinka;
            let korisnickoIme = req.body.korisnickoIme;
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'lozinka': novaLozinka } }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map