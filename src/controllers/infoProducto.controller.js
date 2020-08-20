const Producto = require('../models/Producto');

export async function getInfoProducto(req, res, next){
    const {etiqueta} = req.body;
    const infoProducto = await Producto.find({etiqueta: etiqueta});
    res.json(infoProducto)
}