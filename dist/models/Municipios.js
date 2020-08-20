"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modelo de la Tabla ('Nombre de la tabla', 'Campos de la tabla')
var Municipios = _database.sequelize.define('TBLMunicipios', {
  Municipio: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Nombre: {
    type: _sequelize["default"].STRING
  },
  Departamento: {
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
  // Evitar problemas con las fechas
  freezeTableName: true,
  // Mantener los nombre de la tabla, ya que sequelize los cambia a plural por defecto
  schema: 'dbo' //Nombre del esquema de la base de datos

});

var _default = Municipios;
exports["default"] = _default;