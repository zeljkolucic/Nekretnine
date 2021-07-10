import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Poruka = new Schema({
    idP: {
        type: Number
    },
    naslov: {
        type: String
    }, 
    posiljalac: {
        type: String
    },
    primalac: {
        type: String
    },
    tekst: {
        type: String
    },
    datum: {
        type: String
    },
    procitana: {
        type: Boolean
    },
    arhivirana: {
        type: Boolean
    }
})

export default mongoose.model('Poruka', Poruka, 'poruke');