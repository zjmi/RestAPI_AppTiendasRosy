"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCambioDolarLempira = getCambioDolarLempira;

var _database = require("../database/database");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*---------------------------Taza de Cambio Actual-------------------------*/
function getCambioDolarLempira(_x, _x2) {
  return _getCambioDolarLempira.apply(this, arguments);
}

function _getCambioDolarLempira() {
  _getCambioDolarLempira = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var query, cambioDolarLempira;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = "SELECT A.Nombre,ISNULL((SELECT TOP 1 B.FactorVenta FROM TBLMonedaFactorDolares AS B WHERE B.Moneda=A.Moneda AND B.Fecha<=CONVERT(DATE,GETDATE()) ORDER BY B.Fecha DESC),0) AS 'Factor' FROM TBLMonedas AS A WHERE A.Moneda='02';";
            _context.next = 3;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 3:
            cambioDolarLempira = _context.sent;
            res.json({
              data: cambioDolarLempira
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCambioDolarLempira.apply(this, arguments);
}