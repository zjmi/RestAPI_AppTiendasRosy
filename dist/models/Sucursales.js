"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sucursales = _database.sequelize.define('TBLSucursales', {
  Sucursal: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  Nombre: {
    type: _sequelize["default"].STRING
  },
  CorreoEncargadoSucursal: {
    type: _sequelize["default"].STRING
  },
  CorreoEncargadoEnviarRecibirProducto: {
    type: _sequelize["default"].STRING
  },
  Ciudad: {
    type: _sequelize["default"].STRING
  },
  CostoFleteProductoMayoreo: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  Direccion1: {
    type: _sequelize["default"].STRING
  },
  Direccion2: {
    type: _sequelize["default"].STRING
  },
  Direccion3: {
    type: _sequelize["default"].STRING
  },
  Telefono: {
    type: _sequelize["default"].STRING
  },
  EfectivoDepositarCajaSeguridad: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  LimiteEfectivoDepositoEntregadoBanco: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  FondoCaja: {
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
  CantidadCopiaImprimirFactura: {
    type: _sequelize["default"].SMALLINT
  },
  NombreCorto: {
    type: _sequelize["default"].STRING
  },
  Direccion4: {
    type: _sequelize["default"].STRING
  },
  CorreoAutorizadorReclasificacion: {
    type: _sequelize["default"].STRING
  },
  RifaLineaDatoMonto: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  RifaLineaDatoComentario: {
    type: _sequelize["default"].STRING
  },
  RecargaClaroUsuario: {
    type: _sequelize["default"].STRING
  },
  RecargaClaroContrasena: {
    type: _sequelize["default"].STRING
  },
  RecargaTigoUsuario: {
    type: _sequelize["default"].STRING
  },
  RecargaTigoContrasena: {
    type: _sequelize["default"].STRING
  },
  CorreoAutorizadorDescuento: {
    type: _sequelize["default"].STRING
  },
  Promocion2x1: {
    type: _sequelize["default"].BOOLEAN
  },
  PromocionSegundaMitadPrecio: {
    type: _sequelize["default"].BOOLEAN
  },
  PromocionPague2LLeve3: {
    type: _sequelize["default"].BOOLEAN
  },
  UltimoFactorDolar: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  ImprimeMatricial: {
    type: _sequelize["default"].BOOLEAN
  },
  PromocionRopaL55: {
    type: _sequelize["default"].BIGINT
  },
  PromocionRopaL85: {
    type: _sequelize["default"].BIGINT
  },
  FondoCajaChica: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  ResponsableCajaChica: {
    type: _sequelize["default"].STRING
  },
  Kilometraje: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  MetrosCuadrados: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  CantidadEmpleados: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  SucursalAlterna: {
    type: _sequelize["default"].STRING
  },
  PorcentajeCostosContabilidad: {
    type: _sequelize["default"].DECIMAL(12, 4)
  },
  Zona: {
    type: _sequelize["default"].STRING
  },
  PromocionRopaL25: {
    type: _sequelize["default"].BOOLEAN
  },
  MultiEmpresas: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false,
  freezeTableName: true,
  schema: 'dbo'
});

var _default = Sucursales;
exports["default"] = _default;