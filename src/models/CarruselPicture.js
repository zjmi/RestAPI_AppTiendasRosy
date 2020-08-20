const { Schema, model } = require('mongoose');

const carruselPictureSchema = new Schema({
    etiqueta: String,
    imageURL: String,
    public_id: String
});

module.exports = model('CarruselPicture', carruselPictureSchema);