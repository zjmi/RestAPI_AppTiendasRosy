const { Schema, model } = require('mongoose');

const portadaPictureSchema = new Schema({
    etiqueta: String,
    imageURL: String,
    talla: String,
    public_id: String
});

module.exports = model('PortadaPicture', portadaPictureSchema);