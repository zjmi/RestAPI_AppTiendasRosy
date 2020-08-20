"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _EtiquetaProductoDetalles = _interopRequireDefault(require("./EtiquetaProductoDetalles"));

var _EtiquetaProductoMayoreos = _interopRequireDefault(require("./EtiquetaProductoMayoreos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Productos = _database.sequelize.define('TBLProductos', {
  Activo: {
    type: _sequelize["default"].BOOLEAN
  },
  TipoProducto: {
    type: _sequelize["default"].SMALLINT
  },
  Producto: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Nombre: {
    type: _sequelize["default"].STRING
  },
  GrupoProducto: {
    type: _sequelize["default"].STRING
  },
  CategoriaProducto: {
    type: _sequelize["default"].STRING
  },
  SubCategoriaProducto: {
    type: _sequelize["default"].STRING
  },
  Proveedor: {
    type: _sequelize["default"].STRING
  },
  TipoNivelProducto: {
    type: _sequelize["default"].STRING
  },
  Costo: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  TipoCostoIC: {
    type: _sequelize["default"].SMALLINT
  },
  ValorCostoIC: {
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
  TotalCostoIC: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  DefinirPeso: {
    type: _sequelize["default"].BOOLEAN
  },
  LimitePiezaReclasificacion: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  ExcluirCostoFleteProductoMayoreo: {
    type: _sequelize["default"].BOOLEAN
  },
  UltimoFactorDolar: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  CodigoBarraAlterno: {
    type: _sequelize["default"].STRING
  },
  PImpuesto: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  PExcluirInventario: {
    type: _sequelize["default"].BOOLEAN
  },
  Codigo: {
    type: _sequelize["default"].STRING
  },
  ConteoPromedio: {
    type: _sequelize["default"].INTEGER
  },
  CostoPromedio: {
    type: _sequelize["default"].INTEGER
  },
  PrecioPromedio: {
    type: _sequelize["default"].INTEGER
  },
  CostoPromedioProducto: {
    type: _sequelize["default"].DECIMAL(20, 4)
  },
  CostoPromedioProductoFiscal: {
    type: _sequelize["default"].DECIMAL(20, 4)
  },
  ClaseProducto: {
    type: _sequelize["default"].STRING
  },
  SubCategoriaProducto2: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
}); //Asociacion con EtiquetaProductoMayoreo


Productos.hasMany(_EtiquetaProductoMayoreos["default"], {
  foreignKey: 'Producto'
});

_EtiquetaProductoMayoreos["default"].belongsTo(Productos, {
  foreignKey: 'Producto'
}); //Asociacion con EtiquetaProductoDetalles


Productos.hasMany(_EtiquetaProductoDetalles["default"], {
  foreignKey: 'Producto'
});

_EtiquetaProductoDetalles["default"].belongsTo(Productos, {
  foreignKey: 'Producto'
});

var _default = Productos;
exports["default"] = _default;