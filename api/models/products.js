import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: String,
    rating: String,
    imageUrl: String,
    available: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    category: String
});
const Product = mongoose.model('Product', productSchema);

export default Product