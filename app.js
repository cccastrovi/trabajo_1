const express = require('express');
const port = 3000;
const app = express();

//plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname + '/vistas');

app.use(express.static(__dirname + "/publico"));

app.get('/',(req, res) => {
    res.render('index',{titulo: 'mi titulo dinamico'});
});

app.get('/servicios',(req, res) => {
    res.render('servicios',{Titulo_servicios:'titulo dinamico servicios'});
})






app.use((req,res,next) => {
    res.status(404).render('404');
})

app.listen(port,() => {
    console.log('escuchando en el puerto ', port);
})
