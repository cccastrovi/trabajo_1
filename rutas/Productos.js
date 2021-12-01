const express = require('express');
const rutas = express.Router();

const productos = require('../modelo/cosas');

rutas.get('/crear',(req,res) => {
    res.render('crear')
}) 

rutas.post('/',async (req,res) => {
    const body = req.body
    try{
        const productoBD = new productos(body)
        await productoBD.save()

        res.redirect('/productos')
    }catch(error){
        console.error(error)
    }
})

rutas.put('/:idProducto', async (req,res) => {
    const id = req.params.idProducto
    const body = req.body

    try{
        const productoDB = await productos.findByIdAndUpdate(id,body,{useFindAndModify: false})
        console.log(productoDB)

        res.json({
            estado: true,
            mensaje: 'editado'
        })
    }catch{(error)
        console.log(error)

        res.json({
            estado: false,
            mensaje: 'No editado'
        })
    }
})

rutas.delete('/:idProducto', async (req, res) => {
    const idproducto = req.params.idProducto;

    try {
        const productoDB = await productos.findByIdAndDelete({_id:idproducto})

        if (productoDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado'
            })
        } else {
            res.json({
                estado:false,
                mensaje:'no se pudo eliminar!'
            })
        }
    } catch (error) {
        console.log(error)
    }
})

rutas.get('/',async (req, res) => {

    try{
        const arrayCosasDB = await productos.find()
        console.log(arrayCosasDB);

        res.render("productos", {
            arrayProductos: arrayCosasDB
        });
    }catch(error){
        console.log(error);
    }    
});

rutas.get('/:idProducto', async (req,res) => {

    const idproducto = req.params.idProducto;

    try{
        const productosBD = await productos.findOne({_id: idproducto})
        console.log(productosBD)

        res.render('detalle',{
            producto: productosBD,
            error: false
        })

    }catch(error){
        console.log(error)

        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})



module.exports = rutas; 