import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/products.js';

var app = express();

const PORT = 8081;

// Connect to MongoDB
mongoose
    .connect(
        'mongodb+srv://chaman_raghav:black_wizard@cluster0.mvhj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.use('/products', productRoutes);

app.listen(PORT, () => console.log("Server started listening at PORT", PORT))
