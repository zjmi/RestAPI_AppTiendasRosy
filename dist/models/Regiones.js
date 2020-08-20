"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Paises = _interopRequireDefault(require("./Paises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Regiones = _database.sequelize.define('TBLRegiones', {
  Region: {
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

Regiones.hasMany(_Paises["default"], {
  foreignKey: 'Region'
});

_Paises["default"].belongsTo(Regiones, {
  foreignKey: 'Region'
});

var _default = Regiones;
exports["default"] = _default;