const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema({
    etiqueta: String,
    referencia: String,
    marca: String,
    talla: String,
    estado: Boolean
});

module.exports = model('Producto', ProductoSchema);