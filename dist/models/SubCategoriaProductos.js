"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Productos = _interopRequireDefault(require("./Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SubCategoriaProductos = _database.sequelize.define('TBLSubCategoriaProductos', {
  SubCategoriaProducto: {
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

SubCategoriaProductos.hasMany(_Productos["default"], {
  foreignKey: 'SubCategoriaProducto'
});

_Productos["default"].belongsTo(SubCategoriaProductos, {
  foreignKey: 'SubCategoriaProducto'
});

var _default = SubCategoriaProductos;
exports["default"] = _default;