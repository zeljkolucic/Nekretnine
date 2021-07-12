"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Ponuda = new Schema({
    idP: {
        type: Number
    },
    idN: {
        type: Number
    },
    cena: {
        type: Number
    },
    vlasnik: {
        type: String
    },
    ponudjac: {
        type: String
    },
    pregledana: {
        type: Boolean
    },
    prihvacena: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Ponuda', Ponuda, 'ponude');
//# sourceMappingURL=ponuda.js.map