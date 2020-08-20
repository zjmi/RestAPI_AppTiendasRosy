const { Schema, model } = require('mongoose');

const ordenPedidoDetalleSchema = new Schema({
    idPedido: String,
    direccionEnvio: String,
    cantidad: Number,
    etiqueta: String,
    referencia: String, //New
    lote: String,
    producto: String,
    nombreProducto: String,
    marca: String, //New
    talla: String, //New
    precioVenta: Number,
    subtotal: Number,
    categoriaProducto: String,
    nombreCategoriaProducto: String,
    subCategoriaProducto: String,
    nombreSubCategoriaProducto: String,
    tipoNivelProducto: String,
    nombreNivelTipoProducto: String,
    sucursal: String
});

module.exports = model('OrdenPedidoDetalle', ordenPedidoDetalleSchema);