const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosasEsquema = new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo

const tiendas = mongoose.model('tiendas',cosasEsquema);

module.exports = tiendas;