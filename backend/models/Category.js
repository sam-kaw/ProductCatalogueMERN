import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Category = new Schema({
    category: {
        type: String
    }
});

let ProductCategory = new Schema({
    producyCategory: [Category]
});

export default mongoose.model('ProductCategory', ProductCategory);