"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/prijava').post((req, res) => new korisnik_controller_1.KorisnikController().prijava(req, res));
korisnikRouter.route('/dohvatiKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiKorisnika(req, res));
korisnikRouter.route('/dodajKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().dodajKorisnika(req, res));
korisnikRouter.route('/dohvatiSveKorisnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvatiSveKorisnike(req, res));
korisnikRouter.route('/ukloniKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().ukloniKorisnika(req, res));
korisnikRouter.route('/promeniLozinku').post((req, res) => new korisnik_controller_1.KorisnikController().promeniLozinku(req, res));
korisnikRouter.route('/azurirajKorisnika').post((req, res) => new korisnik_controller_1.KorisnikController().azurirajKorisnika(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map