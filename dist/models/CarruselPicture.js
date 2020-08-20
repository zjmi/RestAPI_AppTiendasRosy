"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var carruselPictureSchema = new Schema({
  etiqueta: String,
  imageURL: String,
  public_id: String
});
module.exports = model('CarruselPicture', carruselPictureSchema);