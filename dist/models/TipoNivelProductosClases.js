"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TipoNivelProductosClases = _database.sequelize.define('TBLTipoNivelProductosClases', {
  TipoNivelProducto: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Clase: {
    type: _sequelize["default"].STRING,
    primaryKey: true
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

var _default = TipoNivelProductosClases;
exports["default"] = _default;