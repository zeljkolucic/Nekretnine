"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Poruka = new Schema({
    idP: {
        type: Number
    },
    naslov: {
        type: String
    },
    posiljalac: {
        type: String
    },
    primalac: {
        type: String
    },
    tekst: {
        type: String
    },
    datum: {
        type: String
    },
    procitana: {
        type: Boolean
    },
    arhivirana: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Poruka', Poruka, 'poruke');
//# sourceMappingURL=poruka.js.map