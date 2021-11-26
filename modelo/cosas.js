const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosasEsquema = new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo

const mascotas = mongoose.model('mascotas',cosasEsquema);

module.exports = mascotas;