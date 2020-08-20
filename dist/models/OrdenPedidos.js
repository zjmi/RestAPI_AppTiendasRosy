"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var ordenPedidoSchema = new Schema({
  fecha: Date,
  ordenPago: Number,
  numeroPedido: String,
  numeroReferencia: String,
  idUser: String,
  nombre: String,
  numeroIdentidad: String,
  telefonoMovil: String,
  metodoPago: String,
  subtotal: Number,
  costoEnvio: Number,
  total: Number,
  estadoPedido: Boolean
});
module.exports = model('OrdenPedido', ordenPedidoSchema);