"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Productos = _interopRequireDefault(require("./Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductoPrecioVentas = _database.sequelize.define('TBLProductoPrecioVentas', {
  Producto: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Precio: {
    type: _sequelize["default"].SMALLINT,
    primaryKey: true
  },
  PrecioVenta: {
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
  },
  ExcluirPedirAutorizacion: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
});

ProductoPrecioVentas.hasMany(_Productos["default"], {
  foreignKey: 'Producto'
});

_Productos["default"].belongsTo(ProductoPrecioVentas, {
  foreignKey: 'Producto'
});

var _default = ProductoPrecioVentas;
exports["default"] = _default;