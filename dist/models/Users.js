"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var bcrypt = require('bcryptjs');

var userSchema = new Schema({
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

userSchema.methods.encryptPassword =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(contrasenia) {
    var salt;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.genSalt(10);

          case 2:
            salt = _context.sent;
            return _context.abrupt("return", bcrypt.hash(contrasenia, salt));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.methods.validatePassword = function (contrasenia) {
  return bcrypt.compare(contrasenia, this.contrasenia);
};

module.exports = model('User', userSchema);