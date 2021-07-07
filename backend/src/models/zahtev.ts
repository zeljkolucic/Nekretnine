import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zahtev = new Schema(
    {
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
    }
)

export default mongoose.model('Zahtev', Zahtev, 'zahtevi');