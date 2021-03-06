import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Product from './models/Product';
import Category from './models/Category';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/products');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/products').get((req, res) => {
    Product.find((err, products) => {
        if (err)
            console.log(err);
        else
            res.json(products);
    });
});

router.route('/products/:id').get((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            console.log(err);
        else
            res.json(product);
    });
});

router.route('/products/add').post((req, res) => {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/products/update/:id').post((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (!product)
            return next(new Error('Could not load document'));
        else {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
            product.category = req.body.category;

            product.save().then(product => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
            console.log('Product Added' + product);
        }
    });
});

router.route('/categories').get((req, res) => {
    Category.find((err, categories) => {
        if (err)
            console.log(err);
        else
            res.json(categories);
    });
});

router.route('/categories/:id').get((req, res) => {
    Category.findById(req.params.id, (err, category) => {
        if (err)
            console.log(err);
        else
            res.json(category);
    });
});

router.route('/categories/add').post((req, res) => {
    let category = new Category(req.body);
    category.save()
        .then(category => {
            res.status(200).json({'category': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/categories/update/:id').post((req, res) => {
    Category.findById(req.params.id, (err, category) => {
        if (!category)
            return next(new Error('Could not load document'));
        else {
            category.name = req.body.name;

            category.save().then(category => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
            console.log('Category Added' + category);
        }
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));