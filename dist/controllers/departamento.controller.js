"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepartamentos = getDepartamentos;

var _Departamentos = _interopRequireDefault(require("../models/Departamentos"));

var _Paises = _interopRequireDefault(require("../models/Paises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Funcion para obtener departamentos
function getDepartamentos(_x, _x2) {
  return _getDepartamentos.apply(this, arguments);
}

function _getDepartamentos() {
  _getDepartamentos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var departamentos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Departamentos["default"].findAll({
              attributes: ['Departamento', 'Nombre', 'Pais'],
              raw: true,
              where: {
                Pais: '02'
              },
              include: [{
                attributes: ['Nombre'],
                raw: true,
                model: _Paises["default"],
                required: true
              }]
            });

          case 3:
            departamentos = _context.sent;
            res.json({
              data: departamentos
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
  return _getDepartamentos.apply(this, arguments);
}