"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var carritoCompraMayoreoSchema = new Schema({
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