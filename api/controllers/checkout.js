'use strict'

const Product = require('../models/product')

function confirmCheckout (req, res){
    console.log('POST /api/checkout')
    console.log(req.body)

    let checkout = req.body;

    let { user, products } = checkout;

    //opciones:
    //1: guardar de a uno a la vez
    //2: investigar bulk action de mongo (se guardan en un array y se envia todo junto)
    for (let i = 0; i < products.length; i++) {
        const element = array[i];
        
    }

    let product = new Product()
    product.name = req.body.name
    product.img = req.body.img
    product.price = req.body.price
    product.category = req.body.category
    product.brand = req.body.brand
    product.origin = req.body.origin
    product.cantidaux = req.body.cantidaux

    product.save((err, productStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err}`})

        res.status(200).send({product: productStored})
    })
}

module.exports = {
    confirmCheckout
}