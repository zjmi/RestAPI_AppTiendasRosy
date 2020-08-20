const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    verificada: String,
    claveSeguridad: String,
    codigoVerificacion: String,
    nombres: String,
    apellidos: String,
    numeroIdentidad: String,
    fechaNacimiento: Date,
    genero: String,
    telefonoFijo: String,
    telefonoMovil: String,
    correoElectronico: String,
    departamento: String,
    ciudad: String,
    direccion: String,
    numeroCasa: String,
    latitud: Number,
    longitud: Number,
    contrasenia: String
});

userSchema.methods.encryptPassword = async (contrasenia) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contrasenia, salt);
};

userSchema.methods.validatePassword = function (contrasenia) {
    return bcrypt.compare(contrasenia, this.contrasenia);
}

module.exports = model('User', userSchema);