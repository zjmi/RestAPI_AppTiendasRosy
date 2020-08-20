"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var ProductoSchema = new Schema({
  etiqueta: String,
  referencia: String,
  marca: String,
  talla: String,
  estado: Boolean
});
module.exports = model('Producto', ProductoSchema);