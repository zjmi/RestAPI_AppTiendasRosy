"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = signup;
exports.login = login;
exports.setProfile = setProfile;
exports.getProfile = getProfile;
exports.setSecurity = setSecurity;
exports.getSecurity = getSecurity;
exports.setLocation = setLocation;
exports.getLocation = getLocation;
exports.setVerificada = setVerificada;
exports.resendEmail = resendEmail;
exports.verifyEmail = verifyEmail;
exports.changePassword = changePassword;
exports.resendEmailPass = resendEmailPass;
exports.profile = profile;
exports.setCoordinates = setCoordinates;
exports.getCoordinates = getCoordinates;

var _email = require("../middlewares/email");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require('../models/Users');

var jwt = require('jsonwebtoken');

var config = require('../config');

/*-----------------------------Registro---------------------------------*/
function signup(_x, _x2, _x3) {
  return _signup.apply(this, arguments);
}
/*---------------------------Inicio de Sesión--------------------------*/


function _signup() {
  _signup = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, correoElectronico, contrasenia, userCheck, codigoVerificacion, user, userInserted, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, correoElectronico = _req$body.correoElectronico, contrasenia = _req$body.contrasenia;
            _context.next = 3;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 3:
            userCheck = _context.sent;

            if (userCheck) {
              _context.next = 20;
              break;
            }

            codigoVerificacion = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
            user = new User({
              verificada: '0',
              claveSeguridad: '',
              codigoVerificacion: codigoVerificacion,
              correoElectronico: correoElectronico,
              contrasenia: contrasenia,
              nombres: '',
              apellidos: '',
              numeroIdentidad: '',
              fechaNacimiento: '',
              genero: '',
              telefonoFijo: '',
              telefonoMovil: '',
              departamento: '',
              ciudad: '',
              direccion: '',
              numeroCasa: '',
              latitud: 0,
              longitud: 0
            });
            _context.next = 9;
            return user.encryptPassword(user.contrasenia);

          case 9:
            user.contrasenia = _context.sent;
            _context.next = 12;
            return user.save();

          case 12:
            _context.next = 14;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 14:
            userInserted = _context.sent;
            token = jwt.sign({
              id: userInserted._id
            }, config.secret, {
              expiresIn: 60 * 60 * 24
            });
            res.json({
              auth: true,
              token: token,
              id: userInserted._id,
              codigoVerificacion: codigoVerificacion,
              verificada: userInserted.verificada
            });
            (0, _email.sendEmail)(correoElectronico, codigoVerificacion);
            _context.next = 21;
            break;

          case 20:
            res.json({
              auth: false,
              token: null
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _signup.apply(this, arguments);
}

function login(_x4, _x5, _x6) {
  return _login.apply(this, arguments);
}
/*---------------------------Perfil de Usuario-------------------------*/


function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, correoElectronico, contrasenia, user, validPassword, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, correoElectronico = _req$body2.correoElectronico, contrasenia = _req$body2.contrasenia;
            _context2.next = 3;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 8;
              break;
            }

            res.json({
              auth: false,
              token: null
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.next = 10;
            return user.validatePassword(contrasenia);

          case 10:
            validPassword = _context2.sent;

            if (!validPassword) {
              res.json({
                auth: false,
                token: null
              });
            } else {
              token = jwt.sign({
                id: user._id
              }, config.secret, {
                expiresIn: 60 * 60 * 24
              });

              if (user.verificada === '0') {
                res.json({
                  auth: true,
                  token: token,
                  id: user._id,
                  verificada: user.verificada,
                  codigoVerificacion: user.codigoVerificacion
                });
              } else {
                res.json({
                  auth: true,
                  token: token,
                  id: user._id,
                  verificada: user.verificada
                });
              }
            }

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _login.apply(this, arguments);
}

function setProfile(_x7, _x8, _x9) {
  return _setProfile.apply(this, arguments);
}

function _setProfile() {
  _setProfile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body3, id, nombres, apellidos, numeroIdentidad, fechaNacimiento, genero, telefonoFijo, telefonoMovil, user;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body3 = req.body, id = _req$body3.id, nombres = _req$body3.nombres, apellidos = _req$body3.apellidos, numeroIdentidad = _req$body3.numeroIdentidad, fechaNacimiento = _req$body3.fechaNacimiento, genero = _req$body3.genero, telefonoFijo = _req$body3.telefonoFijo, telefonoMovil = _req$body3.telefonoMovil;
            _context3.next = 3;
            return User.updateOne({
              _id: id
            }, {
              nombres: nombres,
              apellidos: apellidos,
              numeroIdentidad: numeroIdentidad,
              fechaNacimiento: fechaNacimiento,
              genero: genero,
              telefonoFijo: telefonoFijo,
              telefonoMovil: telefonoMovil
            });

          case 3:
            _context3.next = 5;
            return User.findOne({
              _id: id
            });

          case 5:
            user = _context3.sent;
            res.json(user);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setProfile.apply(this, arguments);
}

function getProfile(_x10, _x11, _x12) {
  return _getProfile.apply(this, arguments);
}
/*---------------------------Seguridad del Usuario-------------------------*/


function _getProfile() {
  _getProfile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.body.id;
            _context4.next = 3;
            return User.findOne({
              _id: id
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context4.sent;
            res.json(user);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getProfile.apply(this, arguments);
}

function setSecurity(_x13, _x14, _x15) {
  return _setSecurity.apply(this, arguments);
}

function _setSecurity() {
  _setSecurity = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body4, id, correoElectronico, contraseniaActual, contraseniaNueva, contraseniaConfirmar, user, validPassword, pass, _user;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body4 = req.body, id = _req$body4.id, correoElectronico = _req$body4.correoElectronico, contraseniaActual = _req$body4.contraseniaActual, contraseniaNueva = _req$body4.contraseniaNueva, contraseniaConfirmar = _req$body4.contraseniaConfirmar;
            _context5.next = 3;
            return User.findOne({
              _id: id
            });

          case 3:
            user = _context5.sent;
            _context5.next = 6;
            return user.validatePassword(contraseniaActual);

          case 6:
            validPassword = _context5.sent;
            _context5.next = 9;
            return user.encryptPassword(contraseniaNueva);

          case 9:
            pass = _context5.sent;

            if (!validPassword) {
              _context5.next = 23;
              break;
            }

            if (!(contraseniaNueva === contraseniaConfirmar && contraseniaNueva !== '' && contraseniaConfirmar !== '')) {
              _context5.next = 20;
              break;
            }

            _context5.next = 14;
            return User.updateOne({
              _id: id
            }, {
              contrasenia: pass
            });

          case 14:
            _context5.next = 16;
            return User.findOne({
              _id: id
            });

          case 16:
            _user = _context5.sent;
            res.json(_user);
            _context5.next = 21;
            break;

          case 20:
            res.json('1');

          case 21:
            _context5.next = 24;
            break;

          case 23:
            res.json('0');

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _setSecurity.apply(this, arguments);
}

function getSecurity(_x16, _x17, _x18) {
  return _getSecurity.apply(this, arguments);
}
/*---------------------------Ubicacion del Usuario-------------------------*/


function _getSecurity() {
  _getSecurity = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.body.id;
            _context6.next = 3;
            return User.findOne({
              _id: id
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context6.sent;
            res.json(user);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getSecurity.apply(this, arguments);
}

function setLocation(_x19, _x20, _x21) {
  return _setLocation.apply(this, arguments);
}

function _setLocation() {
  _setLocation = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res, next) {
    var _req$body5, id, departamento, ciudad, direccion, numeroCasa, user;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body5 = req.body, id = _req$body5.id, departamento = _req$body5.departamento, ciudad = _req$body5.ciudad, direccion = _req$body5.direccion, numeroCasa = _req$body5.numeroCasa;
            _context7.next = 3;
            return User.updateOne({
              _id: id
            }, {
              departamento: departamento,
              ciudad: ciudad,
              direccion: direccion,
              numeroCasa: numeroCasa
            });

          case 3:
            _context7.next = 5;
            return User.findOne({
              _id: id
            });

          case 5:
            user = _context7.sent;
            res.json(user);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _setLocation.apply(this, arguments);
}

function getLocation(_x22, _x23, _x24) {
  return _getLocation.apply(this, arguments);
}
/*---------------------------Verificacion del Email-------------------------*/


function _getLocation() {
  _getLocation = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.body.id;
            _context8.next = 3;
            return User.findOne({
              _id: id
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context8.sent;
            res.json(user);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getLocation.apply(this, arguments);
}

function setVerificada(_x25, _x26, _x27) {
  return _setVerificada.apply(this, arguments);
}
/*---------------------------Reenviar del Email (Confirmacion de Cuenta)-------------------------*/


function _setVerificada() {
  _setVerificada = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res, next) {
    var _req$body6, id, codigoVerificacion, user;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, id = _req$body6.id, codigoVerificacion = _req$body6.codigoVerificacion;
            _context9.next = 3;
            return User.updateOne({
              _id: id
            }, {
              verificada: '1'
            });

          case 3:
            _context9.next = 5;
            return User.updateOne({
              _id: id
            }, {
              $unset: {
                codigoVerificacion: codigoVerificacion
              }
            });

          case 5:
            _context9.next = 7;
            return User.findOne({
              _id: id
            });

          case 7:
            user = _context9.sent;
            res.json(user);

          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _setVerificada.apply(this, arguments);
}

function resendEmail(_x28, _x29, _x30) {
  return _resendEmail.apply(this, arguments);
}
/*---------------------------Verificar Email-------------------------*/


function _resendEmail() {
  _resendEmail = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res, next) {
    var id, codigoVerificacion, user;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.body.id;
            codigoVerificacion = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
            _context10.next = 4;
            return User.updateOne({
              _id: id
            }, {
              codigoVerificacion: codigoVerificacion
            });

          case 4:
            _context10.next = 6;
            return User.findOne({
              _id: id
            });

          case 6:
            user = _context10.sent;
            (0, _email.sendEmail)(user.correoElectronico, user.codigoVerificacion);
            res.json(user);

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _resendEmail.apply(this, arguments);
}

function verifyEmail(_x31, _x32, _x33) {
  return _verifyEmail.apply(this, arguments);
}
/*---------------------------Cambiar Contraseña-------------------------*/


function _verifyEmail() {
  _verifyEmail = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(req, res, next) {
    var correoElectronico, user, claveSeguridad, userUpdate;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            correoElectronico = req.body.correoElectronico;
            _context11.next = 3;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 3:
            user = _context11.sent;

            if (!(user !== null)) {
              _context11.next = 15;
              break;
            }

            claveSeguridad = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
            _context11.next = 8;
            return User.updateOne({
              correoElectronico: correoElectronico
            }, {
              claveSeguridad: claveSeguridad
            });

          case 8:
            _context11.next = 10;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 10:
            userUpdate = _context11.sent;
            (0, _email.sendEmail)(userUpdate.correoElectronico, userUpdate.claveSeguridad);
            res.json(userUpdate);
            _context11.next = 16;
            break;

          case 15:
            res.json(null);

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _verifyEmail.apply(this, arguments);
}

function changePassword(_x34, _x35, _x36) {
  return _changePassword.apply(this, arguments);
}
/*---------------------------Reenviar del Email (Cambiar Contraseña)-------------------------*/


function _changePassword() {
  _changePassword = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(req, res, next) {
    var _req$body7, correoElectronico, contrasenia, user;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body7 = req.body, correoElectronico = _req$body7.correoElectronico, contrasenia = _req$body7.contrasenia;
            _context12.next = 3;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 3:
            user = _context12.sent;
            _context12.next = 6;
            return user.encryptPassword(contrasenia);

          case 6:
            user.contrasenia = _context12.sent;
            _context12.next = 9;
            return User.updateOne({
              correoElectronico: correoElectronico
            }, {
              contrasenia: user.contrasenia,
              claveSeguridad: ''
            });

          case 9:
            res.json(true);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _changePassword.apply(this, arguments);
}

function resendEmailPass(_x37, _x38, _x39) {
  return _resendEmailPass.apply(this, arguments);
}
/*------------------------------Obtener Perfil------------------------------------------ */


function _resendEmailPass() {
  _resendEmailPass = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(req, res, next) {
    var correoElectronico, claveSeguridad, user;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            correoElectronico = req.body.correoElectronico;
            claveSeguridad = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
            _context13.next = 4;
            return User.updateOne({
              correoElectronico: correoElectronico
            }, {
              claveSeguridad: claveSeguridad
            });

          case 4:
            _context13.next = 6;
            return User.findOne({
              correoElectronico: correoElectronico
            });

          case 6:
            user = _context13.sent;
            (0, _email.sendEmail)(user.correoElectronico, user.claveSeguridad);
            res.json(user);

          case 9:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _resendEmailPass.apply(this, arguments);
}

function profile(_x40, _x41, _x42) {
  return _profile.apply(this, arguments);
}
/*--------------------------------Guardar Coordenadas---------------------------------------*/


function _profile() {
  _profile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            id = req.body.id;
            _context14.next = 3;
            return User.findOne({
              _id: id
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context14.sent;
            res.json(user);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _profile.apply(this, arguments);
}

function setCoordinates(_x43, _x44, _x45) {
  return _setCoordinates.apply(this, arguments);
}
/*--------------------------------Obtener Coordenadas---------------------------------------*/


function _setCoordinates() {
  _setCoordinates = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(req, res, next) {
    var _req$body8, id, latitud, longitud, user;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body8 = req.body, id = _req$body8.id, latitud = _req$body8.latitud, longitud = _req$body8.longitud;
            _context15.next = 3;
            return User.findOneAndUpdate({
              _id: id
            }, {
              latitud: latitud,
              longitud: longitud
            });

          case 3:
            user = _context15.sent;

            if (user) {
              res.json(true);
            } else {
              res.json(false);
            }

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _setCoordinates.apply(this, arguments);
}

function getCoordinates(_x46, _x47, _x48) {
  return _getCoordinates.apply(this, arguments);
}

function _getCoordinates() {
  _getCoordinates = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            id = req.body.id;
            _context16.next = 3;
            return User.findOne({
              _id: id
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context16.sent;
            res.json(user);

          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _getCoordinates.apply(this, arguments);
}