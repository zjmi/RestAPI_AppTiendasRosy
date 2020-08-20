"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearch = getSearch;

var _InventarioEtiquetaProductoDetalles = _interopRequireDefault(require("../models/InventarioEtiquetaProductoDetalles"));

var _InventarioEtiquetaProductoMayoreos = _interopRequireDefault(require("../models/InventarioEtiquetaProductoMayoreos"));

var _EtiquetaProductoMayoreos = _interopRequireDefault(require("../models/EtiquetaProductoMayoreos"));

var _EtiquetaProductoDetalles = _interopRequireDefault(require("../models/EtiquetaProductoDetalles"));

var _Productos = _interopRequireDefault(require("../models/Productos"));

var _GrupoProductos = _interopRequireDefault(require("../models/GrupoProductos"));

var _CategoriaProductos = _interopRequireDefault(require("../models/CategoriaProductos"));

var _SubCategoriaProductos = _interopRequireDefault(require("../models/SubCategoriaProductos"));

var _ProductoPrecioVentas = _interopRequireDefault(require("../models/ProductoPrecioVentas"));

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _TipoNivelProductos = _interopRequireDefault(require("../models/TipoNivelProductos"));

var _paginatedResults = require("../middlewares/paginatedResults");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSearch(_x, _x2) {
  return _getSearch.apply(this, arguments);
}

function _getSearch() {
  _getSearch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var filtro, inventarioEtiquetaProductoDetalles, inventarioEtiquetaMayoreo, resultado;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filtro = req.params.filtro;
            _context.prev = 1;
            _context.next = 4;
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
            inventarioEtiquetaProductoDetalles = _context.sent;
            _context.next = 7;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize["default"].fn('count', _sequelize["default"].col('TBLEtiquetaProductoMayoreo.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                Sucursal: 'HNCD01'
              }, _defineProperty({}, _sequelize.Op.or, [{
                '$TBLEtiquetaProductoMayoreo.TBLProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%' + filtro + '%')
              }, {
                '$TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre$': _defineProperty({}, _sequelize.Op.like, '%' + filtro + '%')
              }])]),
              include: [{
                raw: true,
                attributes: ['Producto'],
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  raw: true,
                  attributes: ['Nombre', 'ConteoPromedio'],
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    raw: true,
                    attributes: ['GrupoProducto', 'Nombre'],
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    raw: true,
                    attributes: ['CategoriaProducto', 'Nombre'],
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    raw: true,
                    attributes: ['SubCategoriaProducto', 'Nombre'],
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    raw: true,
                    attributes: ['PrecioVenta'],
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 7:
            inventarioEtiquetaMayoreo = _context.sent;
            //Concatenar en una sola lista los resultado obtenidos en la busqueda
            resultado = inventarioEtiquetaProductoDetalles.concat(inventarioEtiquetaMayoreo);
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, resultado)
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getSearch.apply(this, arguments);
}