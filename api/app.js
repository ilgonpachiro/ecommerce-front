'use strict'

const express = require ('express')
var cors = require('cors');
var cookieParser = require('cookie-parser');

const app = express()
const api = require('./routes')
const mongoose = require('mongoose');

// Conexión con la BBDD

//mongoose.connect('mongodb://db:27017')


//seguridad user: agbellisario    password: qEJltQism5zClFWv

// mongodb+srv://agbellisario:<password>@cluster0.xvwzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());
app.use(cookieParser());


app.use('/api',api)






module.exports = app