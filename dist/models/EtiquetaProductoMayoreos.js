"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _InventarioEtiquetaProductoMayoreos = _interopRequireDefault(require("./InventarioEtiquetaProductoMayoreos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EtiquetaProductoMayoreos = _database.sequelize.define('TBLEtiquetaProductoMayoreos', {
  Etiqueta: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Fecha: {
    type: _sequelize["default"].DATE
  },
  Factura: {
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
  },
  Peso: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  Costo: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  CostoDesaduanaje: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  CostoCompra: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  Conteo: {
    type: _sequelize["default"].INTEGER
  },
  CostoUnitario: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  CostoCompra2: {
    type: _sequelize["default"].DECIMAL(12, 4)
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
}); //Asociacion con InventarioEtiquetaProductoMayoreos


EtiquetaProductoMayoreos.hasOne(_InventarioEtiquetaProductoMayoreos["default"], {
  foreignKey: 'Etiqueta'
});

_InventarioEtiquetaProductoMayoreos["default"].belongsTo(EtiquetaProductoMayoreos, {
  foreignKey: 'Etiqueta'
});

var _default = EtiquetaProductoMayoreos;
exports["default"] = _default;