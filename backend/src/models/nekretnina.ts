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
        grad: {
            type: String
        },
        opstina: {
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
        brojSpratova: {
            type: Number,
            required: false
        },
        sprat: {
            type: Number,
            required: false
        },
        brojSoba: {
            type: String,
            required: false
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
        promovisana: {
            type: Boolean
        },
        odobrena: {
            type: Boolean
        }
    }
)

export default mongoose.model('Nekretnina', Nekretnina, 'nekretnine');