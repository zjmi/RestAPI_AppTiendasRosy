"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipoNivelProductos = getTipoNivelProductos;

var _TipoNivelProductos = _interopRequireDefault(require("../models/TipoNivelProductos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTipoNivelProductos(_x, _x2) {
  return _getTipoNivelProductos.apply(this, arguments);
}

function _getTipoNivelProductos() {
  _getTipoNivelProductos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var tipoNivelProductos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TipoNivelProductos["default"].findAll();

          case 3:
            tipoNivelProductos = _context.sent;
            res.json({
              data: tipoNivelProductos
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getTipoNivelProductos.apply(this, arguments);
}