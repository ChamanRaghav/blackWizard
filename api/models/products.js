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
        default: false
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    category: String
});

export default mongoose.model('Product', productSchema);