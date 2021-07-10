"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zahtev = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    slika: {
        type: String
    },
    adresa: {
        type: String
    },
    gradDrzava: {
        type: String
    },
    tip: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Zahtev', Zahtev, 'zahtevi');
//# sourceMappingURL=zahtev.js.map