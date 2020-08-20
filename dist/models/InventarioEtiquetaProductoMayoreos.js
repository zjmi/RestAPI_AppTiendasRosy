"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InventarioEtiquetaProductoMayoreos = _database.sequelize.define('TBLInventarioEtiquetaProductoMayoreos', {
  Etiqueta: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Sucursal: {
    type: _sequelize["default"].STRING
  },
  Empresa: {
    type: _sequelize["default"].STRING
  },
  UPosteo: {
    type: _sequelize["default"].STRING
  },
  Fposteo: {
    type: _sequelize["default"].DATE
  },
  PC: {
    type: _sequelize["default"].STRING
  },
  EmpresaTrans: {
    type: _sequelize["default"].STRING
  },
  Isla: {
    type: _sequelize["default"].STRING
  },
  Seccion: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
});

var _default = InventarioEtiquetaProductoMayoreos;
exports["default"] = _default;