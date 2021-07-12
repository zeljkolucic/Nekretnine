import mongoose from 'mongoose';
import Nekretnina from './nekretnina';

const Schema = mongoose.Schema;

let Ponuda = new Schema(
    {
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
    }
)

export default mongoose.model('Ponuda', Ponuda, 'ponude');