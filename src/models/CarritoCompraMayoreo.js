const { Schema, model } = require('mongoose');

const carritoCompraMayoreoSchema = new Schema({
    idUser: String,
    cantidadCarritoCompra: Number,
    cantidadDisponible: Number,
    producto: String,
    nombreProducto: String,
    precioVenta: Number,
    categoriaProducto: String,
    nombreCategoriaProducto: String,
    subCategoriaProducto: String,
    nombreSubCategoriaProducto: String,
    grupoProducto: String,
    nombreGrupoProducto: String,
    sucursal: String
});

module.exports = model('CarritoCompraMayoreo', carritoCompraMayoreoSchema);