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
    }
}
exports.PonudaController = PonudaController;
//# sourceMappingURL=ponuda.controller.js.map