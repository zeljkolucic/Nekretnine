import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Poruka = new Schema(
    {
        idPor: {
            type: String
        }, 
        naslov: {
            type: String
        },
        primalac: {
            type: String
        },
        posiljalac: {
            type: String
        },
        tekst: {
            type: String
        },
        procitana: {
            type: Boolean
        },
        arhivirana: {
            type: Boolean
        }
    }
)

export default mongoose.model('Poruka', Poruka, 'poruka');