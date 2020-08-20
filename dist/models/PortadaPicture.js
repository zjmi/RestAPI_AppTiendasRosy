"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var portadaPictureSchema = new Schema({
  etiqueta: String,
  imageURL: String,
  talla: String,
  public_id: String
});
module.exports = model('PortadaPicture', portadaPictureSchema);