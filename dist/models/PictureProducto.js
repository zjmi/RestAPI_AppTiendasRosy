"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var pictureProductoSchema = new Schema({
  etiqueta: String,
  referencia: String,
  imageURL: String,
  portada: Boolean
});
module.exports = model('PictureProducto', pictureProductoSchema);