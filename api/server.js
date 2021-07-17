import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/products.js';
import bodyParser from 'body-parser'
import DB_CONFIG from './dbConfig.js';

const { username, password, databaseName } = DB_CONFIG
const PORT = 8081;

var app = express();

// Connect to MongoDB
mongoose
    .connect(
        `mongodb+srv://${username}:${password}@cluster0.mvhj3.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use('/products', productRoutes);

app.listen(PORT, () => console.log("Server started listening at PORT", PORT))
