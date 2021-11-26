const express = require('express');
const rutas = express.Router();

const mascotas = require('./../modelo/cosas');

rutas.get('/',async (req, res) => {

    try{
        const arrayCosasDB = await mascotas.find()
        console.log(arrayCosasDB);

        res.render("mascotas", {
            arrayMascotas: arrayCosasDB
        });
    }catch(error){
        console.log(error);
    }

    
});

module.exports = rutas;