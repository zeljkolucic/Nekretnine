import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Ponuda = new Schema(
    {
        idP: {
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
        }
    }
)

export default mongoose.model('Ponuda', Ponuda, 'ponude');