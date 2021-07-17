import express from 'express';
const router = express.Router();

import Product from '../models/products.js';

router.get('/', (req, res) => {
    console.log('req.body', req.body)
    Product.find({}, (err, products) => {
        if (err) console.log(err)
        return res.send(products)
    })
})

router.post('/', (req, res) => {
    console.log('req.body', req.body)
    const { name, price, rating, imageUrl, available, gender, category } = req.body
    console.log('name, price, rating, imageUrl, available, gender, category', name, price, rating, imageUrl, available, gender, category)
    Product.create({ name, price, rating, imageUrl, available, gender, category }, (err, product) => {
        if (err) console.log(err);
        return res.send(product)
    })
})

router.put('/:id', (req, res) => {
    const { name, price, rating, imageUrl, available, gender, category } = req.body
    Product.findOneAndUpdate({ _id: req.params.id }, { name, price, rating, imageUrl, available, gender, category }, (err) => {
        if (err) console.log(err);
        return res.send(`Product with id - ${req.params.id} updated`)
    })
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id }, {}, (err, product) => {
        if (err) console.log(err);
        return res.send(`Product with id - ${req.params.id} & name - ${product.name} deleted`)
    })
})

export default router;