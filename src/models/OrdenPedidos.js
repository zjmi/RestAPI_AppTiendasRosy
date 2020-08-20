const { Schema, model } = require('mongoose');

const ordenPedidoSchema = new Schema({
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