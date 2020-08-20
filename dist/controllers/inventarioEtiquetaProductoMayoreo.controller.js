"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategoriaProductosEconomico = getCategoriaProductosEconomico;
exports.getInventarioEtiquetaMayoreoEconomico = getInventarioEtiquetaMayoreoEconomico;
exports.getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto = getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto;
exports.getCategoriaProductosRegular = getCategoriaProductosRegular;
exports.getInventarioEtiquetaMayoreoRegular = getInventarioEtiquetaMayoreoRegular;
exports.getInventarioEtiquetaMayoreoRegularByCategoriaProducto = getInventarioEtiquetaMayoreoRegularByCategoriaProducto;
exports.getCategoriaProductosPremiun = getCategoriaProductosPremiun;
exports.getInventarioEtiquetaMayoreoPremiun = getInventarioEtiquetaMayoreoPremiun;
exports.getInventarioEtiquetaMayoreoPremiunByCategoriaProducto = getInventarioEtiquetaMayoreoPremiunByCategoriaProducto;
exports.getCategoriaProductosPlatinum = getCategoriaProductosPlatinum;
exports.getInventarioEtiquetaMayoreoPlatinum = getInventarioEtiquetaMayoreoPlatinum;
exports.getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto = getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto;
exports.getSearchMayoreo = getSearchMayoreo;

var _InventarioEtiquetaProductoMayoreos = _interopRequireDefault(require("../models/InventarioEtiquetaProductoMayoreos"));

var _EtiquetaProductoMayoreos = _interopRequireDefault(require("../models/EtiquetaProductoMayoreos"));

var _Productos = _interopRequireDefault(require("../models/Productos"));

var _GrupoProductos = _interopRequireDefault(require("../models/GrupoProductos"));

var _CategoriaProductos = _interopRequireDefault(require("../models/CategoriaProductos"));

var _SubCategoriaProductos = _interopRequireDefault(require("../models/SubCategoriaProductos"));

var _ProductoPrecioVentas = _interopRequireDefault(require("../models/ProductoPrecioVentas"));

var _sequelize = require("sequelize");

var _paginatedResults = require("../middlewares/paginatedResults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*-------------------------------------------------------Mayoreo Economico--------------------------------------------------------------------*/
//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 02 (Economico)
function getCategoriaProductosEconomico(_x, _x2) {
  return _getCategoriaProductosEconomico.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 02 (Economico)


function _getCategoriaProductosEconomico() {
  _getCategoriaProductosEconomico = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var categoriaProductosEconomico;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
              group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '02'
              }, {
                Sucursal: 'HNCD01'
              }]),
              include: [{
                attributes: [],
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  attributes: [],
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 3:
            categoriaProductosEconomico = _context.sent;
            res.json({
              data: categoriaProductosEconomico
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
  return _getCategoriaProductosEconomico.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoEconomico(_x3, _x4) {
  return _getInventarioEtiquetaMayoreoEconomico.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 02 (Economico), filtrados por el campo CategoriaProducto


function _getInventarioEtiquetaMayoreoEconomico() {
  _getInventarioEtiquetaMayoreoEconomico = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var inventarioEtiquetaMayoreoEconomico;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
              raw: true,
              where: {
                Sucursal: 'HNCD01'
              },
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
                    required: true,
                    where: {
                      SubCategoriaProducto: '02'
                    }
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

          case 3:
            inventarioEtiquetaMayoreoEconomico = _context2.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaMayoreoEconomico)
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getInventarioEtiquetaMayoreoEconomico.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto(_x5, _x6) {
  return _getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto.apply(this, arguments);
}
/*-------------------------------------------------------Mayoreo Regular----------------------------------------------------------------*/
//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 06 (Regular)


function _getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto() {
  _getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var CategoriaProducto, inventarioEtiquetaMayoreoEconomico;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            CategoriaProducto = req.params.CategoriaProducto;
            _context3.prev = 1;
            _context3.next = 4;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              where: {
                Sucursal: 'HNCD01'
              },
              include: [{
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true,
                    where: {
                      CategoriaProducto: CategoriaProducto
                    }
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true,
                    where: {
                      SubCategoriaProducto: '02'
                    }
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 4:
            inventarioEtiquetaMayoreoEconomico = _context3.sent;
            res.json({
              data: inventarioEtiquetaMayoreoEconomico
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto.apply(this, arguments);
}

function getCategoriaProductosRegular(_x7, _x8) {
  return _getCategoriaProductosRegular.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 06 (Regular)


function _getCategoriaProductosRegular() {
  _getCategoriaProductosRegular = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var categoriaProductosRegular;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
              group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '06'
              }, {
                Sucursal: 'HNCD01'
              }]),
              include: [{
                attributes: [],
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  attributes: [],
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 3:
            categoriaProductosRegular = _context4.sent;
            res.json({
              data: categoriaProductosRegular
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
  return _getCategoriaProductosRegular.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoRegular(_x9, _x10) {
  return _getInventarioEtiquetaMayoreoRegular.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 06 (Regular), filtrados por el campo CategoriaProducto


function _getInventarioEtiquetaMayoreoRegular() {
  _getInventarioEtiquetaMayoreoRegular = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var inventarioEtiquetaMayoreoRegular;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
              raw: true,
              where: {
                Sucursal: 'HNCD01'
              },
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
                    required: true,
                    where: {
                      SubCategoriaProducto: '06'
                    }
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

          case 3:
            inventarioEtiquetaMayoreoRegular = _context5.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaMayoreoRegular)
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
  return _getInventarioEtiquetaMayoreoRegular.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoRegularByCategoriaProducto(_x11, _x12) {
  return _getInventarioEtiquetaMayoreoRegularByCategoriaProducto.apply(this, arguments);
}
/*-------------------------------------------------------Mayoreo Premiun----------------------------------------------------------------*/
//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 05 (Premiun)


function _getInventarioEtiquetaMayoreoRegularByCategoriaProducto() {
  _getInventarioEtiquetaMayoreoRegularByCategoriaProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var CategoriaProducto, inventarioEtiquetaMayoreoRegular;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            CategoriaProducto = req.params.CategoriaProducto;
            _context6.prev = 1;
            _context6.next = 4;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              where: {
                Sucursal: 'HNCD01'
              },
              include: [{
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true,
                    where: {
                      CategoriaProducto: CategoriaProducto
                    }
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true,
                    where: {
                      SubCategoriaProducto: '06'
                    }
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 4:
            inventarioEtiquetaMayoreoRegular = _context6.sent;
            res.json({
              data: inventarioEtiquetaMayoreoRegular
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getInventarioEtiquetaMayoreoRegularByCategoriaProducto.apply(this, arguments);
}

function getCategoriaProductosPremiun(_x13, _x14) {
  return _getCategoriaProductosPremiun.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 05 (Premiun)


function _getCategoriaProductosPremiun() {
  _getCategoriaProductosPremiun = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var categoriaProductosPremiun;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
              group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '05'
              }, {
                Sucursal: 'HNCD01'
              }]),
              include: [{
                attributes: [],
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  attributes: [],
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 3:
            categoriaProductosPremiun = _context7.sent;
            res.json({
              data: categoriaProductosPremiun
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
  return _getCategoriaProductosPremiun.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoPremiun(_x15, _x16) {
  return _getInventarioEtiquetaMayoreoPremiun.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 05 (Premiun), filtrados por el campo CategoriaProducto


function _getInventarioEtiquetaMayoreoPremiun() {
  _getInventarioEtiquetaMayoreoPremiun = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var inventarioEtiquetaMayoreoPremiun;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
              raw: true,
              where: {
                Sucursal: 'HNCD01'
              },
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
                    required: true,
                    where: {
                      SubCategoriaProducto: '05'
                    }
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

          case 3:
            inventarioEtiquetaMayoreoPremiun = _context8.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaMayoreoPremiun)
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
  return _getInventarioEtiquetaMayoreoPremiun.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoPremiunByCategoriaProducto(_x17, _x18) {
  return _getInventarioEtiquetaMayoreoPremiunByCategoriaProducto.apply(this, arguments);
}
/*-------------------------------------------------------Mayoreo Platinum----------------------------------------------------------------*/
//Ruta para obtener todas las CategoriaProductos de mayoreo con la SubCategoriaProducto 04 (Platinum)


function _getInventarioEtiquetaMayoreoPremiunByCategoriaProducto() {
  _getInventarioEtiquetaMayoreoPremiunByCategoriaProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var CategoriaProducto, inventarioEtiquetaMayoreoPremiun;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            CategoriaProducto = req.params.CategoriaProducto;
            _context9.prev = 1;
            _context9.next = 4;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              where: {
                Sucursal: 'HNCD01'
              },
              include: [{
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true,
                    where: {
                      CategoriaProducto: CategoriaProducto
                    }
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true,
                    where: {
                      SubCategoriaProducto: '05'
                    }
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 4:
            inventarioEtiquetaMayoreoPremiun = _context9.sent;
            res.json({
              data: inventarioEtiquetaMayoreoPremiun
            });
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _getInventarioEtiquetaMayoreoPremiunByCategoriaProducto.apply(this, arguments);
}

function getCategoriaProductosPlatinum(_x19, _x20) {
  return _getCategoriaProductosPlatinum.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum)


function _getCategoriaProductosPlatinum() {
  _getCategoriaProductosPlatinum = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var categoriaProductosPlatinum;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', [_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto')), 'Cantidad']],
              group: ['TBLEtiquetaProductoMayoreo.TBLProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre'],
              raw: true,
              where: _defineProperty({}, _sequelize.Op.and, [{
                '$TBLEtiquetaProductoMayoreo.TBLProducto.SubCategoriaProducto$': '04'
              }, {
                Sucursal: 'HNCD01'
              }]),
              include: [{
                attributes: [],
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  attributes: [],
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    attributes: [],
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _CategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _SubCategoriaProductos["default"],
                    required: true
                  }, {
                    attributes: [],
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 3:
            categoriaProductosPlatinum = _context10.sent;
            res.json({
              data: categoriaProductosPlatinum
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
  return _getCategoriaProductosPlatinum.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoPlatinum(_x21, _x22) {
  return _getInventarioEtiquetaMayoreoPlatinum.apply(this, arguments);
} //Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum), filtrados por el campo CategoriaProducto


function _getInventarioEtiquetaMayoreoPlatinum() {
  _getInventarioEtiquetaMayoreoPlatinum = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(req, res) {
    var inventarioEtiquetaMayoreoPlatinum;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
              raw: true,
              where: {
                Sucursal: 'HNCD01'
              },
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
                    required: true,
                    where: {
                      SubCategoriaProducto: '04'
                    }
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

          case 3:
            inventarioEtiquetaMayoreoPlatinum = _context11.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaMayoreoPlatinum)
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
  return _getInventarioEtiquetaMayoreoPlatinum.apply(this, arguments);
}

function getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto(_x23, _x24) {
  return _getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto.apply(this, arguments);
}
/*-------------------------------------------------------Busqueda----------------------------------------------------------------*/
//Ruta para obtener todo el inventario de mayoreo con la SubCategoriaProducto 04 (Platinum)


function _getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto() {
  _getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(req, res) {
    var CategoriaProducto, inventarioEtiquetaMayoreoPlatinum;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            CategoriaProducto = req.params.CategoriaProducto;
            _context12.prev = 1;
            _context12.next = 4;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              where: {
                Sucursal: 'HNCD01'
              },
              include: [{
                model: _EtiquetaProductoMayoreos["default"],
                required: true,
                include: [{
                  model: _Productos["default"],
                  required: true,
                  include: [{
                    model: _GrupoProductos["default"],
                    required: true
                  }, {
                    model: _CategoriaProductos["default"],
                    required: true,
                    where: {
                      CategoriaProducto: CategoriaProducto
                    }
                  }, {
                    model: _SubCategoriaProductos["default"],
                    required: true,
                    where: {
                      SubCategoriaProducto: '04'
                    }
                  }, {
                    model: _ProductoPrecioVentas["default"],
                    required: true,
                    where: {
                      Precio: '1'
                    }
                  }]
                }]
              }]
            });

          case 4:
            inventarioEtiquetaMayoreoPlatinum = _context12.sent;
            res.json({
              data: inventarioEtiquetaMayoreoPlatinum
            });
            _context12.next = 11;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 8]]);
  }));
  return _getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto.apply(this, arguments);
}

function getSearchMayoreo(_x25, _x26) {
  return _getSearchMayoreo.apply(this, arguments);
}

function _getSearchMayoreo() {
  _getSearchMayoreo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(req, res) {
    var filtro, inventarioEtiquetaMayoreo;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            filtro = req.params.filtro;
            _context13.prev = 1;
            _context13.next = 4;
            return _InventarioEtiquetaProductoMayoreos["default"].findAll({
              attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('TBLEtiquetaProductoMayoreo.TBLProducto.Producto')), 'Cantidad'], 'Sucursal'],
              group: ['TBLEtiquetaProductoMayoreo.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Producto', 'TBLEtiquetaProductoMayoreo.TBLProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLProductoPrecioVenta.PrecioVenta', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.GrupoProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLGrupoProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.CategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.SubCategoriaProducto', 'TBLEtiquetaProductoMayoreo.TBLProducto.TBLSubCategoriaProducto.Nombre', 'TBLEtiquetaProductoMayoreo.TBLProducto.ConteoPromedio', 'Sucursal'],
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

          case 4:
            inventarioEtiquetaMayoreo = _context13.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, inventarioEtiquetaMayoreo)
            });
            _context13.next = 11;
            break;

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0);

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return _getSearchMayoreo.apply(this, arguments);
}