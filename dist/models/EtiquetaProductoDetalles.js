"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _InventarioEtiquetaProductoDetalles = _interopRequireDefault(require("./InventarioEtiquetaProductoDetalles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EtiquetaProductoDetalles = _database.sequelize.define('TBLEtiquetaProductoDetalles', {
  Etiqueta: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Fecha: {
    type: _sequelize["default"].DATE
  },
  Lote: {
    type: _sequelize["default"].STRING
  },
  Producto: {
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
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
}); //Asociacion con InventarioEtiquetaProductoDetalles


EtiquetaProductoDetalles.hasOne(_InventarioEtiquetaProductoDetalles["default"], {
  foreignKey: 'Etiqueta'
});

_InventarioEtiquetaProductoDetalles["default"].belongsTo(EtiquetaProductoDetalles, {
  foreignKey: 'Etiqueta'
});

var _default = EtiquetaProductoDetalles;
exports["default"] = _default;