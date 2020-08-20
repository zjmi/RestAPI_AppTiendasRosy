"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMunicipios = getMunicipios;

var _Paises = _interopRequireDefault(require("../models/Paises"));

var _Municipios = _interopRequireDefault(require("../models/Municipios"));

var _Departamentos = _interopRequireDefault(require("../models/Departamentos"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMunicipios(_x, _x2) {
  return _getMunicipios.apply(this, arguments);
}

function _getMunicipios() {
  _getMunicipios = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var departamento, municipios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            departamento = req.body.departamento;
            _context.prev = 1;
            _context.next = 4;
            return _Municipios["default"].findAll({
              attributes: ['Municipio', 'Nombre', 'Departamento'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                '$TBLDepartamento.Pais$': '02'
              }, {
                Departamento: departamento
              }]),
              include: [{
                attributes: ['Nombre', 'Pais'],
                raw: true,
                model: _Departamentos["default"],
                required: true,
                include: [{
                  attributes: ['Nombre'],
                  raw: true,
                  model: _Paises["default"],
                  required: true
                }]
              }]
            });

          case 4:
            municipios = _context.sent;
            res.json({
              data: municipios
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _getMunicipios.apply(this, arguments);
}