'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    img: String,
    price: {type: Number, default: 0},
    category: String,
    brand: String,
    origin: {type: String, enum: ['USA','China']},
    cantidadAux: String
})

module.exports = mongoose.model('Product', ProductSchema)
