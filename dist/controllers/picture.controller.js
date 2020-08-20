"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPictures = getPictures;
exports.getPortadas = getPortadas;
exports.getPicturesItemsEtiqueta = getPicturesItemsEtiqueta;
exports.getPicturesByReferencia = getPicturesByReferencia;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PortadaPicture = require('../models/PortadaPicture');

var CarruselPicture = require('../models/CarruselPicture');

var PictureProducto = require('../models/PictureProducto');

var Producto = require('../models/Producto');

function getPictures(_x, _x2, _x3) {
  return _getPictures.apply(this, arguments);
}

function _getPictures() {
  _getPictures = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var etiqueta, portadaPicture, carruselPicture;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            etiqueta = req.body.etiqueta;
            _context.next = 3;
            return PortadaPicture.findOne({
              etiqueta: etiqueta
            });

          case 3:
            portadaPicture = _context.sent;
            _context.next = 6;
            return CarruselPicture.find({
              etiqueta: etiqueta
            });

          case 6:
            carruselPicture = _context.sent;
            res.json({
              "portada": portadaPicture,
              "carrusel": carruselPicture
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPictures.apply(this, arguments);
}

function getPortadas(_x4, _x5, _x6) {
  return _getPortadas.apply(this, arguments);
}

function _getPortadas() {
  _getPortadas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var portadasPicture;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return PictureProducto.find({
              portada: true
            });

          case 2:
            portadasPicture = _context2.sent;
            res.json(portadasPicture);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPortadas.apply(this, arguments);
}

function getPicturesItemsEtiqueta(_x7, _x8, _x9) {
  return _getPicturesItemsEtiqueta.apply(this, arguments);
}

function _getPicturesItemsEtiqueta() {
  _getPicturesItemsEtiqueta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var etiqueta, productoEstilos, pictureStyles, i, producto;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            etiqueta = req.body.etiqueta;
            productoEstilos = [];
            _context3.next = 4;
            return PictureProducto.find({
              etiqueta: etiqueta,
              portada: true
            });

          case 4:
            pictureStyles = _context3.sent;
            i = 0;

          case 6:
            if (!(i < pictureStyles.length)) {
              _context3.next = 14;
              break;
            }

            _context3.next = 9;
            return Producto.findOne({
              referencia: pictureStyles[i].referencia
            });

          case 9:
            producto = _context3.sent;

            if (!producto.estado) {
              productoEstilos.push(pictureStyles[i]);
            }

          case 11:
            i++;
            _context3.next = 6;
            break;

          case 14:
            res.json(productoEstilos);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getPicturesItemsEtiqueta.apply(this, arguments);
}

function getPicturesByReferencia(_x10, _x11, _x12) {
  return _getPicturesByReferencia.apply(this, arguments);
}

function _getPicturesByReferencia() {
  _getPicturesByReferencia = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var referencia, picturesItem;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            referencia = req.body.referencia;
            _context4.next = 3;
            return PictureProducto.find({
              referencia: referencia
            });

          case 3:
            picturesItem = _context4.sent;
            res.json(picturesItem);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getPicturesByReferencia.apply(this, arguments);
}