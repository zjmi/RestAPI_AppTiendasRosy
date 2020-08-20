const { Schema, model } = require('mongoose');

const ordenPedidoMayoreoSchema = new Schema({
    idPedido: String,
    direccionEnvio: String,
    cantidad: Number,
    producto: String,
    nombreProducto: String,
    precioVenta: Number,
    subtotal: Number,
    categoriaProducto: String,
    nombreCategoriaProducto: String,
    subCategoriaProducto: String,
    nombreSubCategoriaProducto: String,
    sucursal: String
});

module.exports = model('OrdenPedidoMayoreo', ordenPedidoMayoreoSchema);