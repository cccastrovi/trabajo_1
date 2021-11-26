const express = require('express');
const rutas = express.Router();

rutas.get('/',(req, res) => {
    res.render('index',{titulo: 'mi titulo dinamico'});
});

rutas.get('/servicios',(req, res) => {
    res.render('servicios',{Titulo_servicios:'titulo dinamico servicios'});
})

module.exports = rutas;