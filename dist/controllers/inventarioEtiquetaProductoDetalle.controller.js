"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllInventario = getAllInventario;
exports.getRopaInventarioReciente = getRopaInventarioReciente;
exports.getRandomTenItemsRopaInventarioReciente = getRandomTenItemsRopaInventarioReciente;
exports.getCalzadoInventario = getCalzadoInventario;
exports.getCalzadoInventarioForNinaNino = getCalzadoInventarioForNinaNino;
exports.getCalzadoInventarioForMujer = getCalzadoInventarioForMujer;
exports.getCalzadoInventarioForHombre = getCalzadoInventarioForHombre;
exports.getArticulosVariosInventario = getArticulosVariosInventario;
exports.getRopaInventario = getRopaInventario;
exports.getRopaInventarioForNinaNino = getRopaInventarioForNinaNino;
exports.getRopaInventarioForNina = getRopaInventarioForNina;
exports.getRopaInventarioForNino = getRopaInventarioForNino;
exports.getRopaInventarioForBebe = getRopaInventarioForBebe;
exports.getRopaInventarioForHombre = getRopaInventarioForHombre;
exports.getRopaInventarioForMujer = getRopaInventarioForMujer;
exports.getRopaInventarioForHogar = getRopaInventarioForHogar;
exports.getRopaInventarioForInvierno = getRopaInventarioForInvierno;
exports.getRopaInventarioForVerano = getRopaInventarioForVerano;
exports.getRopaInventarioForEventos = getRopaInventarioForEventos;
exports.getRopaDeportivaInventario = getRopaDeportivaInventario;
exports.getSearchDetalle = getSearchDetalle;
exports.getCamisasForHombre = getCamisasForHombre;
exports.getSacosForHombre = getSacosForHombre;
exports.getJeansForHombre = getJeansForHombre;
exports.getTallasEspecialesForHombre = getTallasEspecialesForHombre;
exports.getRopaDeportivaForHombre = getRopaDeportivaForHombre;
exports.getPantalonForHombre = getPantalonForHombre;
exports.getShortForHombre = getShortForHombre;
exports.getVestidoForMujer = getVestidoForMujer;
exports.getJeansForMujer = getJeansForMujer;
exports.getRopaDeportivaForMujer = getRopaDeportivaForMujer;
exports.getBlusaForMujer = getBlusaForMujer;
exports.getShortForMujer = getShortForMujer;
exports.getPantalonForMujer = getPantalonForMujer;
exports.getTallasEspecialesForMujer = getTallasEspecialesForMujer;
exports.getFaldaForMujer = getFaldaForMujer;
exports.getInteriorForMujer = getInteriorForMujer;
exports.getChaquetaForMujer = getChaquetaForMujer;
exports.getCortinasForHogar = getCortinasForHogar;
exports.getToallasForHogar = getToallasForHogar;
exports.getEdredonesForHogar = getEdredonesForHogar;
exports.getRopaHombreByPrecio = getRopaHombreByPrecio;
exports.getRopaMujerByPrecio = getRopaMujerByPrecio;
exports.getRopaHogarByPrecio = getRopaHogarByPrecio;
exports.getRopaNinaByPrecio = getRopaNinaByPrecio;
exports.getRopaNinoByPrecio = getRopaNinoByPrecio;
exports.getRopaBebeByPrecio = getRopaBebeByPrecio;
exports.getZapatosHombreByPrecio = getZapatosHombreByPrecio;
exports.getZapatosMujerByPrecio = getZapatosMujerByPrecio;
exports.getZapatosNinoByPrecio = getZapatosNinoByPrecio;
exports.getArticulosVariosByPrecio = getArticulosVariosByPrecio;
exports.getRopaDeportivaByPrecio = getRopaDeportivaByPrecio;
exports.getRopaEventosByPrecio = getRopaEventosByPrecio;
exports.getRopaInviernoByPrecio = getRopaInviernoByPrecio;
exports.getRopaVeranoByPrecio = getRopaVeranoByPrecio;

var _InventarioEtiquetaProductoDetalles = _interopRequireDefault(require("../models/InventarioEtiquetaProductoDetalles"));

var _EtiquetaProductoDetalles = _interopRequireDefault(require("../models/EtiquetaProductoDetalles"));

var _Productos = _interopRequireDefault(require("../models/Productos"));

var _GrupoProductos = _interopRequireDefault(require("../models/GrupoProductos"));

var _CategoriaProductos = _interopRequireDefault(require("../models/CategoriaProductos"));

var _SubCategoriaProductos = _interopRequireDefault(require("../models/SubCategoriaProductos"));

var _ProductoPrecioVentas = _interopRequireDefault(require("../models/ProductoPrecioVentas"));

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = require("../database/database");

var _TipoNivelProductos = _interopRequireDefault(require("../models/TipoNivelProductos"));

var _paginatedResults = require("../middlewares/paginatedResults");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*---------------------------------------------Inventario Rosy Online---------------------------------------------------------------*/
//Ruta para obtener todo el inventario de Rosy Online
function getAllInventario(_x, _x2) {
  return _getAllInventario.apply(this, arguments);
} //Obtener el inventario Mas Reciente en Rosy Online


function _getAllInventario() {
  _getAllInventario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              where: {
                Sucursal: 'HNR036'
              },
              include: [{
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context.sent;
            res.json({
              data: inventarioEtiquetaProductoDetalles
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getAllInventario.apply(this, arguments);
}

function getRopaInventarioReciente(_x3, _x4) {
  return _getRopaInventarioReciente.apply(this, arguments);
} //Obtener de manera aleatoria los primeros 10 items del inventario Mas Reciente en Rosy Online


function _getRopaInventarioReciente() {
  _getRopaInventarioReciente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var queryInventarioEtiquetaProductoDetalleReciente, inventarioEtiquetaProductoDetalleReciente;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            queryInventarioEtiquetaProductoDetalleReciente = "SELECT InventarioEtiquetaProductoDetalles.Etiqueta " + ",EtiquetaProductoDetalles.Lote " + ",EtiquetaProductoDetalles.Producto " + ",EtiquetaProductoDetalles.PrecioVenta " + ",EtiquetaProductoDetalles.NombreProductos " + ",EtiquetaProductoDetalles.CategoriaProducto " + ",EtiquetaProductoDetalles.NombreCategoriaProductos " + ",EtiquetaProductoDetalles.SubCategoriaProducto " + ",EtiquetaProductoDetalles.NombreSubCategoriaProductos " + ",EtiquetaProductoDetalles.TipoNivelProducto " + ",EtiquetaProductoDetalles.NombreTipoNivelProductos " + ",InventarioEtiquetaProductoDetalles.Sucursal " + ",InventarioEtiquetaProductoDetalles.Cantidad " + ",InventarioEtiquetaProductoDetalles.Fposteo " + "FROM TBLInventarioEtiquetaProductoDetalles AS InventarioEtiquetaProductoDetalles " + "INNER JOIN ( " + "/*INNER JOIN TBLEtiquetaProductoDetalles con Productos*/ " + "SELECT EtiquetaProductoDetalles.Etiqueta " + ",EtiquetaProductoDetalles.Fecha " + ",EtiquetaProductoDetalles.Lote " + ",EtiquetaProductoDetalles.Producto " + ",Productos.Activo " + ",Productos.TipoProducto " + ",Productos.Precio " + ",Productos.PrecioVenta " + ",Productos.ExcluirPedirAutorizacion " + ",Productos.NombreProductos " + ",Productos.GrupoProducto " + ",Productos.NombreGrupoProductos " + ",Productos.CategoriaProducto " + ",Productos.NombreCategoriaProductos " + ",Productos.SubCategoriaProducto " + ",Productos.NombreSubCategoriaProductos " + ",Productos.Proveedor " + ",Productos.TipoNivelProducto " + ",Productos.NombreTipoNivelProductos " + ",Productos.Costo " + ",Productos.TipoCostoIC " + ",Productos.ValorCostoIC " + ",Productos.Empresa AS EmpresaProductos " + ",Productos.UPosteo AS UPosteoProductos " + ",Productos.Fposteo AS FposteoProductos " + ",Productos.PC AS PCProductos " + ",Productos.TotalCostoIC " + ",Productos.DefinirPeso " + ",Productos.LimitePiezaReclasificacion " + ",Productos.ExcluirCostoFleteProductoMayoreo " + ",Productos.UltimoFactorDolar " + ",Productos.CodigoBarraAlterno " + ",Productos.PImpuesto " + ",Productos.PExcluirInventario " + ",Productos.Codigo " + ",Productos.ConteoPromedio " + ",Productos.CostoPromedio " + ",Productos.PrecioPromedio " + ",Productos.CostoPromedioProducto " + ",Productos.CostoPromedioProductoFiscal " + ",Productos.ClaseProducto " + ",Productos.SubCategoriaProducto2 " + ",EtiquetaProductoDetalles.Empresa AS EmpresaEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.UPosteo AS UPosteoEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.Fposteo AS FposteoEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.PC AS PCEtiquetaProductoDetalles " + "FROM TBLEtiquetaProductoDetalles AS EtiquetaProductoDetalles " + "INNER JOIN ( " + "/*INNER JOIN TBLProductos con las tablas TBLGrupoProductos, TBLCategoriaProductos, TBLSubCategoriaProductos, TBLTipoNivelProductos, TBLProductoPrecioVentas*/ " + "SELECT Productos.Activo " + ",Productos.TipoProducto " + ",Productos.Producto " + ",ProductoPrecioVentas.Precio " + ",ProductoPrecioVentas.PrecioVenta " + ",ProductoPrecioVentas.ExcluirPedirAutorizacion " + ",Productos.Nombre AS NombreProductos " + ",Productos.GrupoProducto " + ",GrupoProductos.Nombre AS NombreGrupoProductos " + ",Productos.CategoriaProducto " + ",CategoriaProductos.Nombre AS NombreCategoriaProductos " + ",Productos.SubCategoriaProducto " + ",SubCategoriaProductos.Nombre AS NombreSubCategoriaProductos " + ",Productos.Proveedor " + ",Productos.TipoNivelProducto " + ",TipoNivelProductos.Nombre AS NombreTipoNivelProductos " + ",Productos.Costo " + ",Productos.TipoCostoIC " + ",Productos.ValorCostoIC " + ",Productos.Empresa " + ",Productos.UPosteo " + ",Productos.Fposteo " + ",Productos.PC " + ",Productos.TotalCostoIC " + ",Productos.DefinirPeso " + ",Productos.LimitePiezaReclasificacion " + ",Productos.ExcluirCostoFleteProductoMayoreo " + ",Productos.UltimoFactorDolar " + ",Productos.CodigoBarraAlterno " + ",Productos.PImpuesto " + ",Productos.PExcluirInventario " + ",Productos.Codigo " + ",Productos.ConteoPromedio " + ",Productos.CostoPromedio " + ",Productos.PrecioPromedio " + ",Productos.CostoPromedioProducto " + ",Productos.CostoPromedioProductoFiscal " + ",Productos.ClaseProducto " + ",Productos.SubCategoriaProducto2 " + "FROM TBLProductos AS Productos " + "INNER JOIN TBLGrupoProductos AS GrupoProductos " + "ON Productos.GrupoProducto = GrupoProductos.GrupoProducto " + "INNER JOIN TBLCategoriaProductos AS CategoriaProductos " + "ON Productos.CategoriaProducto = CategoriaProductos.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos AS SubCategoriaProductos " + "ON Productos.SubCategoriaProducto = SubCategoriaProductos.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos AS TipoNivelProductos " + "ON Productos.TipoNivelProducto = TipoNivelProductos.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas AS ProductoPrecioVentas " + "ON Productos.Producto = ProductoPrecioVentas.Producto " + ") AS Productos " + "ON EtiquetaProductoDetalles.Producto = Productos.Producto " + ") AS EtiquetaProductoDetalles " + "ON InventarioEtiquetaProductoDetalles.Etiqueta = EtiquetaProductoDetalles.Etiqueta " + "WHERE InventarioEtiquetaProductoDetalles.Sucursal = 'HNR036' AND (InventarioEtiquetaProductoDetalles.Fposteo BETWEEN DATEADD(M,-1,GETDATE()) AND GETDATE()) " + "ORDER BY InventarioEtiquetaProductoDetalles.Fposteo DESC";
            _context2.next = 4;
            return _database.sequelize.query(queryInventarioEtiquetaProductoDetalleReciente, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventarioEtiquetaProductoDetalleReciente = _context2.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalleReciente)
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getRopaInventarioReciente.apply(this, arguments);
}

function getRandomTenItemsRopaInventarioReciente(_x5, _x6) {
  return _getRandomTenItemsRopaInventarioReciente.apply(this, arguments);
}
/*----------------------------------------------------Inventario Calzado Rosy Online-------------------------------------------------*/
//Obtener el inventario de Calzado en Rosy Online


function _getRandomTenItemsRopaInventarioReciente() {
  _getRandomTenItemsRopaInventarioReciente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var queryInventarioEtiquetaProductoDetalleReciente, inventarioEtiquetaProductoDetalleReciente;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            queryInventarioEtiquetaProductoDetalleReciente = "SELECT TOP 10 InventarioEtiquetaProductoDetalles.Etiqueta " + ",EtiquetaProductoDetalles.Lote " + ",EtiquetaProductoDetalles.Producto " + ",EtiquetaProductoDetalles.PrecioVenta " + ",EtiquetaProductoDetalles.NombreProductos " + ",EtiquetaProductoDetalles.CategoriaProducto " + ",EtiquetaProductoDetalles.NombreCategoriaProductos " + ",EtiquetaProductoDetalles.SubCategoriaProducto " + ",EtiquetaProductoDetalles.NombreSubCategoriaProductos " + ",EtiquetaProductoDetalles.TipoNivelProducto " + ",EtiquetaProductoDetalles.NombreTipoNivelProductos " + ",InventarioEtiquetaProductoDetalles.Sucursal " + ",InventarioEtiquetaProductoDetalles.Cantidad " + ",InventarioEtiquetaProductoDetalles.Fposteo " + "FROM TBLInventarioEtiquetaProductoDetalles AS InventarioEtiquetaProductoDetalles " + "INNER JOIN ( " + "/*INNER JOIN TBLEtiquetaProductoDetalles con Productos*/ " + "SELECT EtiquetaProductoDetalles.Etiqueta " + ",EtiquetaProductoDetalles.Fecha " + ",EtiquetaProductoDetalles.Lote " + ",EtiquetaProductoDetalles.Producto " + ",Productos.Activo " + ",Productos.TipoProducto " + ",Productos.Precio " + ",Productos.PrecioVenta " + ",Productos.ExcluirPedirAutorizacion " + ",Productos.NombreProductos " + ",Productos.GrupoProducto " + ",Productos.NombreGrupoProductos " + ",Productos.CategoriaProducto " + ",Productos.NombreCategoriaProductos " + ",Productos.SubCategoriaProducto " + ",Productos.NombreSubCategoriaProductos " + ",Productos.Proveedor " + ",Productos.TipoNivelProducto " + ",Productos.NombreTipoNivelProductos " + ",Productos.Costo " + ",Productos.TipoCostoIC " + ",Productos.ValorCostoIC " + ",Productos.Empresa AS EmpresaProductos " + ",Productos.UPosteo AS UPosteoProductos " + ",Productos.Fposteo AS FposteoProductos " + ",Productos.PC AS PCProductos " + ",Productos.TotalCostoIC " + ",Productos.DefinirPeso " + ",Productos.LimitePiezaReclasificacion " + ",Productos.ExcluirCostoFleteProductoMayoreo " + ",Productos.UltimoFactorDolar " + ",Productos.CodigoBarraAlterno " + ",Productos.PImpuesto " + ",Productos.PExcluirInventario " + ",Productos.Codigo " + ",Productos.ConteoPromedio " + ",Productos.CostoPromedio " + ",Productos.PrecioPromedio " + ",Productos.CostoPromedioProducto " + ",Productos.CostoPromedioProductoFiscal " + ",Productos.ClaseProducto " + ",Productos.SubCategoriaProducto2 " + ",EtiquetaProductoDetalles.Empresa AS EmpresaEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.UPosteo AS UPosteoEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.Fposteo AS FposteoEtiquetaProductoDetalles " + ",EtiquetaProductoDetalles.PC AS PCEtiquetaProductoDetalles " + "FROM TBLEtiquetaProductoDetalles AS EtiquetaProductoDetalles " + "INNER JOIN ( " + "/*INNER JOIN TBLProductos con las tablas TBLGrupoProductos, TBLCategoriaProductos, TBLSubCategoriaProductos, TBLTipoNivelProductos, TBLProductoPrecioVentas*/ " + "SELECT Productos.Activo " + ",Productos.TipoProducto " + ",Productos.Producto " + ",ProductoPrecioVentas.Precio " + ",ProductoPrecioVentas.PrecioVenta " + ",ProductoPrecioVentas.ExcluirPedirAutorizacion " + ",Productos.Nombre AS NombreProductos " + ",Productos.GrupoProducto " + ",GrupoProductos.Nombre AS NombreGrupoProductos " + ",Productos.CategoriaProducto " + ",CategoriaProductos.Nombre AS NombreCategoriaProductos " + ",Productos.SubCategoriaProducto " + ",SubCategoriaProductos.Nombre AS NombreSubCategoriaProductos " + ",Productos.Proveedor " + ",Productos.TipoNivelProducto " + ",TipoNivelProductos.Nombre AS NombreTipoNivelProductos " + ",Productos.Costo " + ",Productos.TipoCostoIC " + ",Productos.ValorCostoIC " + ",Productos.Empresa " + ",Productos.UPosteo " + ",Productos.Fposteo " + ",Productos.PC " + ",Productos.TotalCostoIC " + ",Productos.DefinirPeso " + ",Productos.LimitePiezaReclasificacion " + ",Productos.ExcluirCostoFleteProductoMayoreo " + ",Productos.UltimoFactorDolar " + ",Productos.CodigoBarraAlterno " + ",Productos.PImpuesto " + ",Productos.PExcluirInventario " + ",Productos.Codigo " + ",Productos.ConteoPromedio " + ",Productos.CostoPromedio " + ",Productos.PrecioPromedio " + ",Productos.CostoPromedioProducto " + ",Productos.CostoPromedioProductoFiscal " + ",Productos.ClaseProducto " + ",Productos.SubCategoriaProducto2 " + "FROM TBLProductos AS Productos " + "INNER JOIN TBLGrupoProductos AS GrupoProductos " + "ON Productos.GrupoProducto = GrupoProductos.GrupoProducto " + "INNER JOIN TBLCategoriaProductos AS CategoriaProductos " + "ON Productos.CategoriaProducto = CategoriaProductos.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos AS SubCategoriaProductos " + "ON Productos.SubCategoriaProducto = SubCategoriaProductos.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos AS TipoNivelProductos " + "ON Productos.TipoNivelProducto = TipoNivelProductos.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas AS ProductoPrecioVentas " + "ON Productos.Producto = ProductoPrecioVentas.Producto " + ") AS Productos " + "ON EtiquetaProductoDetalles.Producto = Productos.Producto " + ") AS EtiquetaProductoDetalles " + "ON InventarioEtiquetaProductoDetalles.Etiqueta = EtiquetaProductoDetalles.Etiqueta " + "WHERE InventarioEtiquetaProductoDetalles.Sucursal = 'HNR036' AND (InventarioEtiquetaProductoDetalles.Fposteo BETWEEN DATEADD(M,-1,GETDATE()) AND GETDATE()) " + "ORDER BY NEWID()";
            _context3.next = 4;
            return _database.sequelize.query(queryInventarioEtiquetaProductoDetalleReciente, {
              plain: false,
              raw: false,
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventarioEtiquetaProductoDetalleReciente = _context3.sent;
            res.json({
              data: inventarioEtiquetaProductoDetalleReciente
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getRandomTenItemsRopaInventarioReciente.apply(this, arguments);
}

function getCalzadoInventario(_x7, _x8) {
  return _getCalzadoInventario.apply(this, arguments);
} //Obtener el inventario de Calzado en Rosy Online para Niño y Niña


function _getCalzadoInventario() {
  _getCalzadoInventario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
              }]),
              include: [{
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context4.sent;
            res.json({
              data: inventarioEtiquetaProductoDetalles
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getCalzadoInventario.apply(this, arguments);
}

function getCalzadoInventarioForNinaNino(_x9, _x10) {
  return _getCalzadoInventarioForNinaNino.apply(this, arguments);
} //Obtener el inventario de Calzado en Rosy Online para Mujer


function _getCalzadoInventarioForNinaNino() {
  _getCalzadoInventarioForNinaNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑ%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑ%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑ%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context5.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _getCalzadoInventarioForNinaNino.apply(this, arguments);
}

function getCalzadoInventarioForMujer(_x11, _x12) {
  return _getCalzadoInventarioForMujer.apply(this, arguments);
} //Obtener el inventario de Calzado en Rosy Online para Hombre


function _getCalzadoInventarioForMujer() {
  _getCalzadoInventarioForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%MUJER%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%MUJER%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%MUJER%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context6.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _getCalzadoInventarioForMujer.apply(this, arguments);
}

function getCalzadoInventarioForHombre(_x13, _x14) {
  return _getCalzadoInventarioForHombre.apply(this, arguments);
}
/*----------------------------------------------------Inventario Articulos Varios Rosy Online-------------------------------------------------*/
//Obtener el inventario de Articulos Varios en Rosy Online


function _getCalzadoInventarioForHombre() {
  _getCalzadoInventarioForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '02'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%HOMBRE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%HOMBRE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%HOMBRE%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context7.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return _getCalzadoInventarioForHombre.apply(this, arguments);
}

function getArticulosVariosInventario(_x15, _x16) {
  return _getArticulosVariosInventario.apply(this, arguments);
}
/*----------------------------------------------------Inventario Ropa Rosy Online-------------------------------------------------*/
//Obtener el inventario de Ropa en Rosy Online


function _getArticulosVariosInventario() {
  _getArticulosVariosInventario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '06'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '04'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '08'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context8.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _getArticulosVariosInventario.apply(this, arguments);
}

function getRopaInventario(_x17, _x18) {
  return _getRopaInventario.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Niño y Niña


function _getRopaInventario() {
  _getRopaInventario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }]),
              include: [{
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context9.sent;
            res.json({
              data: inventarioEtiquetaProductoDetalles
            });
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return _getRopaInventario.apply(this, arguments);
}

function getRopaInventarioForNinaNino(_x19, _x20) {
  return _getRopaInventarioForNinaNino.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Niña


function _getRopaInventarioForNinaNino() {
  _getRopaInventarioForNinaNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑ%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑ%')
              }])]),
              include: [{
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context10.sent;
            res.json({
              data: inventarioEtiquetaProductoDetalles
            });
            _context10.next = 10;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return _getRopaInventarioForNinaNino.apply(this, arguments);
}

function getRopaInventarioForNina(_x21, _x22) {
  return _getRopaInventarioForNina.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Niño


function _getRopaInventarioForNina() {
  _getRopaInventarioForNina = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.notLike, '%BEBE%')
              }]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context11.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return _getRopaInventarioForNina.apply(this, arguments);
}

function getRopaInventarioForNino(_x23, _x24) {
  return _getRopaInventarioForNino.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Bebe


function _getRopaInventarioForNino() {
  _getRopaInventarioForNino = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%NIÑO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.notLike, '%BEBE%')
              }]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context12.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context12.next = 10;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return _getRopaInventarioForNino.apply(this, arguments);
}

function getRopaInventarioForBebe(_x25, _x26) {
  return _getRopaInventarioForBebe.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Hombre


function _getRopaInventarioForBebe() {
  _getRopaInventarioForBebe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BEBE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BEBE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BB%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BB%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context13.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context13.next = 10;
            break;

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return _getRopaInventarioForBebe.apply(this, arguments);
}

function getRopaInventarioForHombre(_x27, _x28) {
  return _getRopaInventarioForHombre.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Mujer


function _getRopaInventarioForHombre() {
  _getRopaInventarioForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%HOMBRE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%HOMBRE%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CAMIS%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context14.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context14.next = 10;
            break;

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            console.log(_context14.t0);

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 7]]);
  }));
  return _getRopaInventarioForHombre.apply(this, arguments);
}

function getRopaInventarioForMujer(_x29, _x30) {
  return _getRopaInventarioForMujer.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para el Hogar


function _getRopaInventarioForMujer() {
  _getRopaInventarioForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%MUJER%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%MUJER%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BLUSA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%VESTIDO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BRASSIER%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%FALDA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CAPRY%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context15.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context15.next = 10;
            break;

          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15["catch"](0);
            console.log(_context15.t0);

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return _getRopaInventarioForMujer.apply(this, arguments);
}

function getRopaInventarioForHogar(_x31, _x32) {
  return _getRopaInventarioForHogar.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para el Invierno


function _getRopaInventarioForHogar() {
  _getRopaInventarioForHogar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '12'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '54'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '102'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '133'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '199'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '22'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '98'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context16.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context16.next = 10;
            break;

          case 7:
            _context16.prev = 7;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);

          case 10:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 7]]);
  }));
  return _getRopaInventarioForHogar.apply(this, arguments);
}

function getRopaInventarioForInvierno(_x33, _x34) {
  return _getRopaInventarioForInvierno.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para el Verano


function _getRopaInventarioForInvierno() {
  _getRopaInventarioForInvierno = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%INVIERNO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%INVIERNO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%INVIERNO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CHAQUETA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CHAQUETA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CHAQUETA%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context17.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context17.next = 10;
            break;

          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            console.log(_context17.t0);

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[0, 7]]);
  }));
  return _getRopaInventarioForInvierno.apply(this, arguments);
}

function getRopaInventarioForVerano(_x35, _x36) {
  return _getRopaInventarioForVerano.apply(this, arguments);
} //Obtener el inventario de Ropa en Rosy Online para Eventos


function _getRopaInventarioForVerano() {
  _getRopaInventarioForVerano = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee18(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%FALDA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%FALDA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%FALDA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BLUSA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BLUSA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%BLUSA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SHORT%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SHORT%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SHORT%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CAMIS%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CAMIS%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%CAMIS%')
              }]), _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.notLike, '%ML%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.notLike, '%ML%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context18.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context18.next = 10;
            break;

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            console.log(_context18.t0);

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[0, 7]]);
  }));
  return _getRopaInventarioForVerano.apply(this, arguments);
}

function getRopaInventarioForEventos(_x37, _x38) {
  return _getRopaInventarioForEventos.apply(this, arguments);
} //Obtener el inventario de Ropa Deportiva en Rosy Online


function _getRopaInventarioForEventos() {
  _getRopaInventarioForEventos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SACO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SACO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%SACO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%VESTIDO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%VESTIDO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%VESTIDO%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%TELA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%TELA%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%TELA%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context19.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context19.next = 10;
            break;

          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19["catch"](0);
            console.log(_context19.t0);

          case 10:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 7]]);
  }));
  return _getRopaInventarioForEventos.apply(this, arguments);
}

function getRopaDeportivaInventario(_x39, _x40) {
  return _getRopaDeportivaInventario.apply(this, arguments);
} //Buscar en el inventario de Rosy Online


function _getRopaDeportivaInventario() {
  _getRopaDeportivaInventario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee20(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%DEPORTIV%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%DEPORTIV%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%DEPORTIV%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context20.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context20.next = 10;
            break;

          case 7:
            _context20.prev = 7;
            _context20.t0 = _context20["catch"](0);
            console.log(_context20.t0);

          case 10:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[0, 7]]);
  }));
  return _getRopaDeportivaInventario.apply(this, arguments);
}

function getSearchDetalle(_x41, _x42) {
  return _getSearchDetalle.apply(this, arguments);
} //Filtro para obtener camisas para Hombre


function _getSearchDetalle() {
  _getSearchDetalle = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee21(req, res) {
    var filtro, inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            filtro = req.params.filtro;
            _context21.prev = 1;
            _context21.next = 4;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%' + filtro + '%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%' + filtro + '%')
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%' + filtro + '%')
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 4:
            inventarioEtiquetaProductoDetalles = _context21.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context21.next = 11;
            break;

          case 8:
            _context21.prev = 8;
            _context21.t0 = _context21["catch"](1);
            console.log(_context21.t0);

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return _getSearchDetalle.apply(this, arguments);
}

function getCamisasForHombre(_x43, _x44) {
  return _getCamisasForHombre.apply(this, arguments);
} //Filtro para obtener sacos para Hombre


function _getCamisasForHombre() {
  _getCamisasForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee22(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '117'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '50'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '51'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context22.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context22.next = 10;
            break;

          case 7:
            _context22.prev = 7;
            _context22.t0 = _context22["catch"](0);
            console.log(_context22.t0);

          case 10:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[0, 7]]);
  }));
  return _getCamisasForHombre.apply(this, arguments);
}

function getSacosForHombre(_x45, _x46) {
  return _getSacosForHombre.apply(this, arguments);
} //Filtro para obtener jeans para Hombre


function _getSacosForHombre() {
  _getSacosForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee23(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '63'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '64'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context23.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context23.next = 10;
            break;

          case 7:
            _context23.prev = 7;
            _context23.t0 = _context23["catch"](0);
            console.log(_context23.t0);

          case 10:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return _getSacosForHombre.apply(this, arguments);
}

function getJeansForHombre(_x47, _x48) {
  return _getJeansForHombre.apply(this, arguments);
} //Filtro para obtener tallas especiales para Hombre


function _getJeansForHombre() {
  _getJeansForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee24(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '49'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context24.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context24.next = 10;
            break;

          case 7:
            _context24.prev = 7;
            _context24.t0 = _context24["catch"](0);
            console.log(_context24.t0);

          case 10:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[0, 7]]);
  }));
  return _getJeansForHombre.apply(this, arguments);
}

function getTallasEspecialesForHombre(_x49, _x50) {
  return _getTallasEspecialesForHombre.apply(this, arguments);
} //Filtro para obtener ropa deportiva para Hombre


function _getTallasEspecialesForHombre() {
  _getTallasEspecialesForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee25(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '113'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '111'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context25.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context25.next = 10;
            break;

          case 7:
            _context25.prev = 7;
            _context25.t0 = _context25["catch"](0);
            console.log(_context25.t0);

          case 10:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[0, 7]]);
  }));
  return _getTallasEspecialesForHombre.apply(this, arguments);
}

function getRopaDeportivaForHombre(_x51, _x52) {
  return _getRopaDeportivaForHombre.apply(this, arguments);
} //Filtro para obtener pantalones para Hombre


function _getRopaDeportivaForHombre() {
  _getRopaDeportivaForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee26(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '130'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '158'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context26.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context26.next = 10;
            break;

          case 7:
            _context26.prev = 7;
            _context26.t0 = _context26["catch"](0);
            console.log(_context26.t0);

          case 10:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[0, 7]]);
  }));
  return _getRopaDeportivaForHombre.apply(this, arguments);
}

function getPantalonForHombre(_x53, _x54) {
  return _getPantalonForHombre.apply(this, arguments);
} //Filtro para obtener shorts para Hombre


function _getPantalonForHombre() {
  _getPantalonForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee27(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '80'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context27.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context27.next = 10;
            break;

          case 7:
            _context27.prev = 7;
            _context27.t0 = _context27["catch"](0);
            console.log(_context27.t0);

          case 10:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[0, 7]]);
  }));
  return _getPantalonForHombre.apply(this, arguments);
}

function getShortForHombre(_x55, _x56) {
  return _getShortForHombre.apply(this, arguments);
} //Filtro para obtener vestidos para Mujer


function _getShortForHombre() {
  _getShortForHombre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee28(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            _context28.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '65'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context28.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context28.next = 10;
            break;

          case 7:
            _context28.prev = 7;
            _context28.t0 = _context28["catch"](0);
            console.log(_context28.t0);

          case 10:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[0, 7]]);
  }));
  return _getShortForHombre.apply(this, arguments);
}

function getVestidoForMujer(_x57, _x58) {
  return _getVestidoForMujer.apply(this, arguments);
} //Filtro para obtener jeans para Mujer


function _getVestidoForMujer() {
  _getVestidoForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee29(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            _context29.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '52'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '53'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '54'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context29.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context29.next = 10;
            break;

          case 7:
            _context29.prev = 7;
            _context29.t0 = _context29["catch"](0);
            console.log(_context29.t0);

          case 10:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[0, 7]]);
  }));
  return _getVestidoForMujer.apply(this, arguments);
}

function getJeansForMujer(_x59, _x60) {
  return _getJeansForMujer.apply(this, arguments);
} //Filtro para obtener ropa deportiva para Mujer


function _getJeansForMujer() {
  _getJeansForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee30(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            _context30.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '48'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context30.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context30.next = 10;
            break;

          case 7:
            _context30.prev = 7;
            _context30.t0 = _context30["catch"](0);
            console.log(_context30.t0);

          case 10:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[0, 7]]);
  }));
  return _getJeansForMujer.apply(this, arguments);
}

function getRopaDeportivaForMujer(_x61, _x62) {
  return _getRopaDeportivaForMujer.apply(this, arguments);
} //Filtro para obtener blusas para Mujer


function _getRopaDeportivaForMujer() {
  _getRopaDeportivaForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee31(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            _context31.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '131'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '159'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context31.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context31.next = 10;
            break;

          case 7:
            _context31.prev = 7;
            _context31.t0 = _context31["catch"](0);
            console.log(_context31.t0);

          case 10:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[0, 7]]);
  }));
  return _getRopaDeportivaForMujer.apply(this, arguments);
}

function getBlusaForMujer(_x63, _x64) {
  return _getBlusaForMujer.apply(this, arguments);
} //Filtro para obtener shorts para Mujer


function _getBlusaForMujer() {
  _getBlusaForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee32(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            _context32.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '46'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context32.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context32.next = 10;
            break;

          case 7:
            _context32.prev = 7;
            _context32.t0 = _context32["catch"](0);
            console.log(_context32.t0);

          case 10:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[0, 7]]);
  }));
  return _getBlusaForMujer.apply(this, arguments);
}

function getShortForMujer(_x65, _x66) {
  return _getShortForMujer.apply(this, arguments);
} //Filtro para obtener pantalones para Mujer


function _getShortForMujer() {
  _getShortForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee33(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            _context33.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '61'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context33.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context33.next = 10;
            break;

          case 7:
            _context33.prev = 7;
            _context33.t0 = _context33["catch"](0);
            console.log(_context33.t0);

          case 10:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, null, [[0, 7]]);
  }));
  return _getShortForMujer.apply(this, arguments);
}

function getPantalonForMujer(_x67, _x68) {
  return _getPantalonForMujer.apply(this, arguments);
} //Filtro para obtener tallas especiales para Mujer


function _getPantalonForMujer() {
  _getPantalonForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee34(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            _context34.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '79'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context34.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context34.next = 10;
            break;

          case 7:
            _context34.prev = 7;
            _context34.t0 = _context34["catch"](0);
            console.log(_context34.t0);

          case 10:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34, null, [[0, 7]]);
  }));
  return _getPantalonForMujer.apply(this, arguments);
}

function getTallasEspecialesForMujer(_x69, _x70) {
  return _getTallasEspecialesForMujer.apply(this, arguments);
} //Filtro para obtener faldas para Mujer


function _getTallasEspecialesForMujer() {
  _getTallasEspecialesForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee35(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.prev = 0;
            _context35.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '112'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '114'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context35.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context35.next = 10;
            break;

          case 7:
            _context35.prev = 7;
            _context35.t0 = _context35["catch"](0);
            console.log(_context35.t0);

          case 10:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35, null, [[0, 7]]);
  }));
  return _getTallasEspecialesForMujer.apply(this, arguments);
}

function getFaldaForMujer(_x71, _x72) {
  return _getFaldaForMujer.apply(this, arguments);
} //Filtro para obtener ropa interior para Mujer


function _getFaldaForMujer() {
  _getFaldaForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee36(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.prev = 0;
            _context36.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '76'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context36.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context36.next = 10;
            break;

          case 7:
            _context36.prev = 7;
            _context36.t0 = _context36["catch"](0);
            console.log(_context36.t0);

          case 10:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36, null, [[0, 7]]);
  }));
  return _getFaldaForMujer.apply(this, arguments);
}

function getInteriorForMujer(_x73, _x74) {
  return _getInteriorForMujer.apply(this, arguments);
} //Filtro para obtener chaquetas para Mujer


function _getInteriorForMujer() {
  _getInteriorForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee37(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.prev = 0;
            _context37.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '167'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '24'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context37.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context37.next = 10;
            break;

          case 7:
            _context37.prev = 7;
            _context37.t0 = _context37["catch"](0);
            console.log(_context37.t0);

          case 10:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37, null, [[0, 7]]);
  }));
  return _getInteriorForMujer.apply(this, arguments);
}

function getChaquetaForMujer(_x75, _x76) {
  return _getChaquetaForMujer.apply(this, arguments);
} //Filtro para obtener Cortinas para el Hogar


function _getChaquetaForMujer() {
  _getChaquetaForMujer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee38(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.prev = 0;
            _context38.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto$': '100'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '83'
              }])]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context38.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context38.next = 10;
            break;

          case 7:
            _context38.prev = 7;
            _context38.t0 = _context38["catch"](0);
            console.log(_context38.t0);

          case 10:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38, null, [[0, 7]]);
  }));
  return _getChaquetaForMujer.apply(this, arguments);
}

function getCortinasForHogar(_x77, _x78) {
  return _getCortinasForHogar.apply(this, arguments);
} //Filtro para obtener Cortinas para el Hogar


function _getCortinasForHogar() {
  _getCortinasForHogar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee39(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.prev = 0;
            _context39.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '133'
              }]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context39.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context39.next = 10;
            break;

          case 7:
            _context39.prev = 7;
            _context39.t0 = _context39["catch"](0);
            console.log(_context39.t0);

          case 10:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39, null, [[0, 7]]);
  }));
  return _getCortinasForHogar.apply(this, arguments);
}

function getToallasForHogar(_x79, _x80) {
  return _getToallasForHogar.apply(this, arguments);
} //Filtro para obtener Edredones para el Hogar


function _getToallasForHogar() {
  _getToallasForHogar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee40(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.prev = 0;
            _context40.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '102'
              }]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context40.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context40.next = 10;
            break;

          case 7:
            _context40.prev = 7;
            _context40.t0 = _context40["catch"](0);
            console.log(_context40.t0);

          case 10:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40, null, [[0, 7]]);
  }));
  return _getToallasForHogar.apply(this, arguments);
}

function getEdredonesForHogar(_x81, _x82) {
  return _getEdredonesForHogar.apply(this, arguments);
}

function _getEdredonesForHogar() {
  _getEdredonesForHogar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee41(req, res) {
    var inventarioEtiquetaProductoDetalles;
    return regeneratorRuntime.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _context41.prev = 0;
            _context41.next = 3;
            return _InventarioEtiquetaProductoDetalles["default"].findAll({
              attributes: ['Etiqueta', 'Sucursal', 'Cantidad', 'Fposteo'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNR036'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.GrupoProducto$': '01'
              }, {
                '$TBLEtiquetaProductoDetalle.TBLProducto.TBLCategoriaProducto.CategoriaProducto$': '54'
              }]),
              include: [{
                attributes: ['Lote'],
                raw: true,
                model: _EtiquetaProductoDetalles["default"],
                required: true,
                include: [{
                  attributes: ['Producto', 'Nombre'],
                  raw: true,
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    raw: true,
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: ['CategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    raw: true,
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: ['TipoNivelProducto', 'Nombre'],
                    raw: true,
                    model: _TipoNivelProductos["default"],
                    required: true
                  }, {
                    attributes: ['PrecioVenta'],
                    raw: true,
                    model: _ProductoPrecioVentas["default"],
                    required: true
                  }]
                }]
              }]
            });

          case 3:
            inventarioEtiquetaProductoDetalles = _context41.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaProductoDetalles)
            });
            _context41.next = 10;
            break;

          case 7:
            _context41.prev = 7;
            _context41.t0 = _context41["catch"](0);
            console.log(_context41.t0);

          case 10:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41, null, [[0, 7]]);
  }));
  return _getEdredonesForHogar.apply(this, arguments);
}

function getRopaHombreByPrecio(_x83, _x84) {
  return _getRopaHombreByPrecio.apply(this, arguments);
}

function _getRopaHombreByPrecio() {
  _getRopaHombreByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee42(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (E.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%CAMIS%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context42.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context42.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42);
  }));
  return _getRopaHombreByPrecio.apply(this, arguments);
}

function getRopaMujerByPrecio(_x85, _x86) {
  return _getRopaMujerByPrecio.apply(this, arguments);
}

function _getRopaMujerByPrecio() {
  _getRopaMujerByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee43(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (E.Nombre LIKE '%MUJER%' OR D.Nombre LIKE '%MUJER%' OR E.Nombre LIKE '%BLUSA%' OR E.Nombre LIKE '%VESTIDO%' OR E.Nombre LIKE '%BRASSIER%' OR E.Nombre LIKE '%FALDA%' OR E.Nombre LIKE '%CAPRY%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context43.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context43.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43);
  }));
  return _getRopaMujerByPrecio.apply(this, arguments);
}

function getRopaHogarByPrecio(_x87, _x88) {
  return _getRopaHogarByPrecio.apply(this, arguments);
}

function _getRopaHogarByPrecio() {
  _getRopaHogarByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee44(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.CategoriaProducto = '12' OR C.CategoriaProducto = '54' OR C.CategoriaProducto = '102' OR C.CategoriaProducto = '133' OR C.SubCategoriaProducto = '199' OR C.SubCategoriaProducto = '22' OR C.SubCategoriaProducto = '98') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context44.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context44.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44);
  }));
  return _getRopaHogarByPrecio.apply(this, arguments);
}

function getRopaNinaByPrecio(_x89, _x90) {
  return _getRopaNinaByPrecio.apply(this, arguments);
}

function _getRopaNinaByPrecio() {
  _getRopaNinaByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee45(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND C.Nombre LIKE '%NIÑA%' AND C.Nombre NOT LIKE '%BEBE%' AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context45.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context45.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45);
  }));
  return _getRopaNinaByPrecio.apply(this, arguments);
}

function getRopaNinoByPrecio(_x91, _x92) {
  return _getRopaNinoByPrecio.apply(this, arguments);
}

function _getRopaNinoByPrecio() {
  _getRopaNinoByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee46(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND C.Nombre LIKE '%NIÑO%' AND C.Nombre NOT LIKE '%BEBE%' AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context46.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context46.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  }));
  return _getRopaNinoByPrecio.apply(this, arguments);
}

function getRopaBebeByPrecio(_x93, _x94) {
  return _getRopaBebeByPrecio.apply(this, arguments);
}

function _getRopaBebeByPrecio() {
  _getRopaBebeByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee47(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%BEBE%' OR C.Nombre LIKE '%BB%' OR E.Nombre LIKE '%BEBE%' OR E.Nombre LIKE '%BB%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context47.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context47.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47);
  }));
  return _getRopaBebeByPrecio.apply(this, arguments);
}

function getZapatosHombreByPrecio(_x95, _x96) {
  return _getZapatosHombreByPrecio.apply(this, arguments);
}

function _getZapatosHombreByPrecio() {
  _getZapatosHombreByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee48(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "    G.PrecioVenta, " + "    A.Cantidad " + "    FROM TBLInventarioEtiquetaProductoDetalles A " + "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "    WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%HOMBRE%' OR D.Nombre LIKE '%HOMBRE%' OR E.Nombre LIKE '%HOMBRE%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context48.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context48.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48);
  }));
  return _getZapatosHombreByPrecio.apply(this, arguments);
}

function getZapatosMujerByPrecio(_x97, _x98) {
  return _getZapatosMujerByPrecio.apply(this, arguments);
}

function _getZapatosMujerByPrecio() {
  _getZapatosMujerByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee49(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "    G.PrecioVenta, " + "    A.Cantidad " + "    FROM TBLInventarioEtiquetaProductoDetalles A " + "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%MUJER%' OR D.Nombre LIKE '%MUJER%' OR E.Nombre LIKE '%MUJER%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context49.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context49.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49);
  }));
  return _getZapatosMujerByPrecio.apply(this, arguments);
}

function getZapatosNinoByPrecio(_x99, _x100) {
  return _getZapatosNinoByPrecio.apply(this, arguments);
}

function _getZapatosNinoByPrecio() {
  _getZapatosNinoByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee50(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "    convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "    G.PrecioVenta, " + "    A.Cantidad " + "    FROM TBLInventarioEtiquetaProductoDetalles A " + "    INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "    INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "    INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "    INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "    INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "    INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '02' AND (C.Nombre LIKE '%NIÑ%' OR D.Nombre LIKE '%NIÑ%' OR E.Nombre LIKE '%NIÑ%') AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context50.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context50.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50);
  }));
  return _getZapatosNinoByPrecio.apply(this, arguments);
}

function getArticulosVariosByPrecio(_x101, _x102) {
  return _getArticulosVariosByPrecio.apply(this, arguments);
}

function _getArticulosVariosByPrecio() {
  _getArticulosVariosByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee51(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee51$(_context51) {
      while (1) {
        switch (_context51.prev = _context51.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND (C.GrupoProducto = '06' OR C.GrupoProducto = '04' OR C.GrupoProducto = '08') " + "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context51.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context51.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context51.stop();
        }
      }
    }, _callee51);
  }));
  return _getArticulosVariosByPrecio.apply(this, arguments);
}

function getRopaDeportivaByPrecio(_x103, _x104) {
  return _getRopaDeportivaByPrecio.apply(this, arguments);
}

function _getRopaDeportivaByPrecio() {
  _getRopaDeportivaByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee52(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee52$(_context52) {
      while (1) {
        switch (_context52.prev = _context52.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%DEPORTIV%' OR D.Nombre LIKE '%DEPORTIV%' OR E.Nombre LIKE '%DEPORTIV%') " + "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context52.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context52.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context52.stop();
        }
      }
    }, _callee52);
  }));
  return _getRopaDeportivaByPrecio.apply(this, arguments);
}

function getRopaEventosByPrecio(_x105, _x106) {
  return _getRopaEventosByPrecio.apply(this, arguments);
}

function _getRopaEventosByPrecio() {
  _getRopaEventosByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee53(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%SACO%' OR D.Nombre LIKE '%SACO%' OR E.Nombre LIKE '%SACO%' " + "OR C.Nombre LIKE '%VESTIDO%' OR D.Nombre LIKE '%VESTIDO%' OR E.Nombre LIKE '%VESTIDO%' " + "OR C.Nombre LIKE '%TELA%' OR D.Nombre LIKE '%TELA%' OR E.Nombre LIKE '%TELA%') " + "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context53.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context53.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53);
  }));
  return _getRopaEventosByPrecio.apply(this, arguments);
}

function getRopaInviernoByPrecio(_x107, _x108) {
  return _getRopaInviernoByPrecio.apply(this, arguments);
}

function _getRopaInviernoByPrecio() {
  _getRopaInviernoByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee54(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%INVIERNO%' OR D.Nombre LIKE '%INVIERNO%' OR E.Nombre LIKE '%INVIERNO%' " + "OR C.Nombre LIKE '%CHAQUETA%' OR D.Nombre LIKE '%CHAQUETA%' OR E.Nombre LIKE '%CHAQUETA%') " + "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context54.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context54.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54);
  }));
  return _getRopaInviernoByPrecio.apply(this, arguments);
}

function getRopaVeranoByPrecio(_x109, _x110) {
  return _getRopaVeranoByPrecio.apply(this, arguments);
}

function _getRopaVeranoByPrecio() {
  _getRopaVeranoByPrecio = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee55(req, res) {
    var precio, query, inventario;
    return regeneratorRuntime.wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            precio = req.params.precio;
            query = "SELECT A.Etiqueta, A.Sucursal, B.Lote, F.TipoNivelProducto, F.Nombre AS NombreTipoNivelProducto, C.GrupoProducto, C.CategoriaProducto, D.Nombre AS NombreCategoria, C.SubCategoriaProducto, E.Nombre AS NombreSubCategoria, B.Producto, C.Nombre AS NombreProducto, " + "convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto  AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) as Precio, " + "G.PrecioVenta, " + "A.Cantidad " + "FROM TBLInventarioEtiquetaProductoDetalles A " + "INNER JOIN TBLEtiquetaProductoDetalles B ON B.Etiqueta = A.Etiqueta " + "INNER JOIN TBLProductos C ON C.Producto = B.Producto " + "INNER JOIN TBLCategoriaProductos D ON D.CategoriaProducto = C.CategoriaProducto " + "INNER JOIN TBLSubCategoriaProductos E ON E.SubCategoriaProducto = C.SubCategoriaProducto " + "INNER JOIN TBLTipoNivelProductos F ON F.TipoNivelProducto = C.TipoNivelProducto " + "INNER JOIN TBLProductoPrecioVentas G ON G.Producto = B.Producto " + "WHERE A.Sucursal = 'HNR036' AND C.GrupoProducto = '01' AND (C.Nombre LIKE '%FALDA%' OR D.Nombre LIKE '%FALDA%' OR E.Nombre LIKE '%FALDA%' " + "OR C.Nombre LIKE '%BLUSA%' OR D.Nombre LIKE '%BLUSA%' OR E.Nombre LIKE '%BLUSA%' " + "OR C.Nombre LIKE '%SHORT%' OR D.Nombre LIKE '%SHORT%' OR E.Nombre LIKE '%SHORT%' " + "OR C.Nombre LIKE '%CAMIS%' OR D.Nombre LIKE '%CAMIS%' OR E.Nombre LIKE '%CAMIS%') " + "AND (C.Nombre NOT LIKE '%ML%' OR E.Nombre NOT LIKE '%ML%') " + "AND convert(numeric(12,2),(ROUND(ISNULL((SELECT G.PrecioVenta FROM TBLProductoPrecioVentas AS G WHERE G.Producto= b.Producto AND G.Precio=1),0)*ISNULL((SELECT TOP 1 FactorVenta FROM TBLMonedaFactorDolares WHERE Moneda='02' ORDER BY Fecha DESC),1),0))) <= " + precio;
            _context55.next = 4;
            return _database.sequelize.query(query, {
              // If plain is true, then sequelize will only return the first
              // record of the result set. In case of false it will return all records.
              plain: false,
              // Set this to true if you don't have a model definition for your query.
              raw: false,
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            inventario = _context55.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventario)
            });

          case 6:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55);
  }));
  return _getRopaVeranoByPrecio.apply(this, arguments);
}