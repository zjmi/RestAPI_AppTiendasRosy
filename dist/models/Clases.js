"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _TipoNivelProductosClases = _interopRequireDefault(require("./TipoNivelProductosClases"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Clases = _database.sequelize.define('TBLClases', {
  Clase: {
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

Clases.hasMany(_TipoNivelProductosClases["default"], {
  foreignKey: 'Clase'
});

_TipoNivelProductosClases["default"].belongsTo(Clases, {
  foreignKey: 'Clase'
});

var _default = Clases;
exports["default"] = _default;