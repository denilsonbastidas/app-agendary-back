'use strict'
const express = require('express');
let app = express();

// settings 
app.set('puert', process.env.PORT || 2200);

// Carga archivos Rutas
const contact_Routes = require('./routes/contact');

// Config Json
app.use(express.urlencoded({ extended: false}));
app.use(express.json()) 

// Configurar cabeceras y cors
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//? Rutas
app.use('/api',contact_Routes);

module.exports = app;