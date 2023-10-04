'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://127.0.0.1:27017/portfolio')
    .then( () => {
        console.log("conexion exitosa!")
        app.listen(port, () => { 
            console.log("el servidor funciona correctamente"); 
        })
    } )
    .catch(err => console.log(err))



