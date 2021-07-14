"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const korisnik_routes_1 = __importDefault(require("./routes/korisnik.routes"));
const zahtev_routes_1 = __importDefault(require("./routes/zahtev.routes"));
const nekretnina_routes_1 = __importDefault(require("./routes/nekretnina.routes"));
const multer_1 = __importDefault(require("multer"));
const ponuda_routes_1 = __importDefault(require("./routes/ponuda.routes"));
const procenat_routes_1 = __importDefault(require("./routes/procenat.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/nekretnine2021");
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log("Konekcija sa bazom je uspesna");
});
const router = express_1.default.Router();
router.use('/korisnik', korisnik_routes_1.default);
router.use('/zahtev', zahtev_routes_1.default);
router.use('/nekretnina', nekretnina_routes_1.default);
router.use('/ponuda', ponuda_routes_1.default);
router.use('/procenat', procenat_routes_1.default);
const storage = multer_1.default.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../frontend/app/src/assets');
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`);
    }
});
let upload = multer_1.default({ storage: storage });
app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Dodajte fajl!');
        return next(error);
    }
    console.log(file.filename);
    res.send(file.filename);
});
app.post('/files', upload.array('files'), (req, res, next) => {
    const files = req.files;
    if (!files) {
        const error = new Error('Dodajte fajl!');
        return next(error);
    }
    res.send(files);
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map