"use strict";

var _mongoose = require("mongoose");

var coordenadaEnvio = new _mongoose.Schema({
  idPedido: String,
  latitud: Number,
  longitud: Number
});
module.exports = (0, _mongoose.model)('coordenadasenvio', coordenadaEnvio);