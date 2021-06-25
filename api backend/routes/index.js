'use strict'

const { Router } = require('express')
const express = require ('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

//devuelve lista productos
api.get('/product', productCtrl.getProducts) 

//devuelve un producto particular por id
api.get('/product/:productId', productCtrl.getProduct)

api.post('/product',productCtrl.saveProduct)

//actualizar producto
api.put('/product/:productId', productCtrl.updateProduct)

//eliminar producto
api.delete('/product/:productId',productCtrl.deleteProduct )

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'tienes acceso' })

//crear Item (Carro)
Router.post('/', async (req, res) =>{
    console.log(req.body);
    const item = new Item ({
        title: req.body.title,
        price: req.body.price,
    }   );

    try{
        const newItem = await item.save();
        res.json(newItem);
    } catch (err){
        res.json({message: err.message});
    }

})

});

module.exports = api