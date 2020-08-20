"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInfoProducto = getInfoProducto;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Producto = require('../models/Producto');

function getInfoProducto(_x, _x2, _x3) {
  return _getInfoProducto.apply(this, arguments);
}

function _getInfoProducto() {
  _getInfoProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var etiqueta, infoProducto;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            etiqueta = req.body.etiqueta;
            _context.next = 3;
            return Producto.find({
              etiqueta: etiqueta
            });

          case 3:
            infoProducto = _context.sent;
            res.json(infoProducto);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getInfoProducto.apply(this, arguments);
}