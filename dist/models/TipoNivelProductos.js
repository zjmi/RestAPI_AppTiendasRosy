"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _TipoNivelProductosClases = _interopRequireDefault(require("./TipoNivelProductosClases"));

var _Productos = _interopRequireDefault(require("./Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TipoNivelProductos = _database.sequelize.define('TBLTipoNivelProductos', {
  TipoNivelProducto: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Nombre: {
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
});

TipoNivelProductos.hasMany(_TipoNivelProductosClases["default"], {
  foreignKey: 'TipoNivelProducto'
});

_TipoNivelProductosClases["default"].belongsTo(TipoNivelProductos, {
  foreignKey: 'TipoNivelProducto'
});

TipoNivelProductos.hasMany(_Productos["default"], {
  foreignKey: 'TipoNivelProducto'
});

_Productos["default"].belongsTo(TipoNivelProductos, {
  foreignKey: 'TipoNivelProducto'
});

var _default = TipoNivelProductos;
exports["default"] = _default;