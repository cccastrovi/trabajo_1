const express = require('express');
const rutas = express.Router();

rutas.get('/',(req, res) => {
    res.render('index',{titulo: 'Estamos mejornando'});
});

rutas.get('/servicios',(req, res) => {
    res.render('servicios',{Titulo_servicios:'Lorem ipsum dolor, sit amet consectetur, adipisicing elit.'});
})

module.exports = rutas;