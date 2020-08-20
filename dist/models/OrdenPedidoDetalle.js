"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var ordenPedidoDetalleSchema = new Schema({
  idPedido: String,
  direccionEnvio: String,
  cantidad: Number,
  etiqueta: String,
  referencia: String,
  //New
  lote: String,
  producto: String,
  nombreProducto: String,
  marca: String,
  //New
  talla: String,
  //New
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