const { Schema, model } = require('mongoose');

const pictureProductoSchema = new Schema({
    etiqueta: String,
    referencia: String,
    imageURL: String,
    portada: Boolean
});

module.exports = model('PictureProducto', pictureProductoSchema);