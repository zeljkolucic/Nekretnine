import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import zahtevRouter from './routes/zahtev.routes';
import nekretninaRouter from './routes/nekretnina.routes';
import multer from 'multer';
import ponudaRouter from './routes/ponuda.routes';
import sanduceRouter from './routes/sanduce.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/nekretnine2021");
const conn = mongoose.connection;
conn.once('open', ()=>{
    console.log("Konekcija sa bazom je uspesna");
})

const router = express.Router();
router.use('/korisnik', korisnikRouter);
router.use('/zahtev', zahtevRouter);
router.use('/nekretnina', nekretninaRouter);
router.use('/ponuda', ponudaRouter);
router.use('/sanduce', sanduceRouter);

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../frontend/app/src/assets')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
})

let upload = multer({storage: storage});

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if(!file) {
        const error = new Error('Dodajte fajl!');
        return next(error);
    }
    console.log(file.filename);
    res.send(file.filename)
})

app.post('/files', upload.array('files'), (req, res, next) => {
    const files = req.files;
    if(!files) {
        const error = new Error('Dodajte fajl!');
        return next(error);
    }
    res.send(files)
})

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));