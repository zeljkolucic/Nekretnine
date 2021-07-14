import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Ponuda = new Schema(
    {
        idP: {
            type: Number
        },
        idN: {
            type: Number
        },
        nazivNekretnine: {
            type: String
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
        tipOglasa: {
            type: String
        },
        datumOd: {
            type: String,
            required: false
        },
        datumDo: {
            type: String,
            required: false
        },
        pregledana: {
            type: Boolean
        },
        prihvacena: {
            type: Boolean
        }
    }
)

export default mongoose.model('Ponuda', Ponuda, 'ponude');