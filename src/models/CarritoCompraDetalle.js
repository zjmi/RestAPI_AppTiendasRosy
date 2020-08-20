const { Schema, model } = require('mongoose');

const carritoCompraDetalleSchema = new Schema({
    idUser: String,
    cantidadCarritoCompra: Number,
    cantidadDisponible: Number,
    etiqueta: String,
    referencia: String, //New
    lote: String,
    producto: String,
    nombreProducto: String,
    marca: String, //New
    talla: String, //New
    precioVenta: Number,
    categoriaProducto: String,
    nombreCategoriaProducto: String,
    subCategoriaProducto: String,
    nombreSubCategoriaProducto: String,
    tipoNivelProducto: String,
    nombreNivelTipoProducto: String,
    sucursal: String
});

module.exports = model('CarritoCompraDetalle', carritoCompraDetalleSchema);