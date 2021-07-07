"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Nekretnina = new Schema({
    idN: {
        type: Number
    },
    naziv: {
        type: String
    },
    adresa: {
        type: String
    },
    tipNekretnine: {
        type: String
    },
    povrsina: {
        type: Number
    },
    brojSoba: {
        type: String
    },
    namestena: {
        type: Boolean
    },
    galerija: {
        type: Array
    },
    tipOglasa: {
        type: String
    },
    cena: {
        type: Number
    },
    vlasnik: {
        type: String
    },
    odobrena: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Nekretnina', Nekretnina, 'nekretnine');
//# sourceMappingURL=nekretnina.js.map