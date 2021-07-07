import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Nekretnina = new Schema(
    {
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
    }
)

export default mongoose.model('Nekretnina', Nekretnina, 'nekretnine');