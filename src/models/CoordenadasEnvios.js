import {Schema, model} from 'mongoose'

const coordenadaEnvio = new Schema({
    idPedido: String,
    latitud: Number,
    longitud: Number
})

module.exports = model('coordenadasenvio', coordenadaEnvio);