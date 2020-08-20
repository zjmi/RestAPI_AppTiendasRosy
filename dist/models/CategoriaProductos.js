"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Productos = _interopRequireDefault(require("./Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategoriaProductos = _database.sequelize.define('TBLCategoriaProductos', {
  CategoriaProducto: {
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

CategoriaProductos.hasMany(_Productos["default"], {
  foreignKey: 'CategoriaProducto'
});

_Productos["default"].belongsTo(CategoriaProductos, {
  foreignKey: 'CategoriaProducto'
});

var _default = CategoriaProductos;
exports["default"] = _default;