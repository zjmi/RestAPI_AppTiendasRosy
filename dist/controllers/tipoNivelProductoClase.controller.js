"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipoNivelProductosClases = getTipoNivelProductosClases;

var _TipoNivelProductosClases = _interopRequireDefault(require("../models/TipoNivelProductosClases"));

var _Clases = _interopRequireDefault(require("../models/Clases"));

var _TipoNivelProductos = _interopRequireDefault(require("../models/TipoNivelProductos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTipoNivelProductosClases(_x, _x2) {
  return _getTipoNivelProductosClases.apply(this, arguments);
}

function _getTipoNivelProductosClases() {
  _getTipoNivelProductosClases = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var tipoNivelProductosClases;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TipoNivelProductosClases["default"].findAll({
              include: [{
                model: _Clases["default"],
                required: true
              }, {
                model: _TipoNivelProductos["default"],
                required: true
              }]
            });

          case 3:
            tipoNivelProductosClases = _context.sent;
            res.json({
              data: tipoNivelProductosClases
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
  return _getTipoNivelProductosClases.apply(this, arguments);
}