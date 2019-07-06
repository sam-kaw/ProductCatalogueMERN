import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Product = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    skuNumber: {
        type: String
    },
    category: {
        type: String
    }
});

export default mongoose.model('Product', Product);