import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import zahtevRouter from './routes/zahtev.routes';
import nekretninaRouter from './routes/nekretnina.routes';
import multer from 'multer';

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

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));