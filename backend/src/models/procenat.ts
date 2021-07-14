import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Procenat = new Schema(
    {
        namena: {
            type: String
        },
        iznos: {
            type: Number
        }
    }
)

export default mongoose.model('Procenat', Procenat, 'procenti');