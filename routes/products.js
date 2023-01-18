const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// router for get all products

router.get('/', (req, res, next) => {
    Product.find((err, products) => {
        if (err) return next(err);
        res.json(products); // send data in json format
    })
})

// create CRUD routes

// create
router.post('/', (req, res, next) => {
    Product.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post); // send data in json format
    })
})

// read
router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post); // send data in json format
    })
})

// update
router.put('/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post); // send data in json format
    })
})

// delete
router.delete('/:id', (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post); // send data in json format
    })
})

module.exports = router;