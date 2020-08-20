"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InventarioEtiquetaProductoDetalles = _database.sequelize.define('TBLInventarioEtiquetaProductoDetalles', {
  Etiqueta: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Sucursal: {
    type: _sequelize["default"].STRING
  },
  Cantidad: {
    type: _sequelize["default"].DECIMAL(12, 4)
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
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
});

var _default = InventarioEtiquetaProductoDetalles;
exports["default"] = _default;