const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//prosesar datos del formulario 
app.use(bodyParser.urlencoded({extended:false}));
//envio de los datos del formulario usando json 
app.use(bodyParser.json());

require('dotenv').config()

const port = process.env.PORT || 3000;

//plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname + '/vistas');

app.use(express.static(__dirname + "/publico"));

//coneccion a la base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.94ivi.mongodb.net/${process.env.NAME}?retryWrites=true&w=majority`;


mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})

.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))

//rutas web
app.use('/',require('./rutas/rutas'));
app.use('/productos',require('./rutas/Productos'));

app.use((req,res,next) => {
    res.status(404).render('404'); 
})

app.listen(port,() => {
    console.log('escuchando en el puerto ', port);
})
 