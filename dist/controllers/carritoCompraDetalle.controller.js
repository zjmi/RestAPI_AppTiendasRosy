"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItemDetalleCarritoCompra = addItemDetalleCarritoCompra;
exports.removeItemDetalleCarritoCompra = removeItemDetalleCarritoCompra;
exports.getItemsDetalleCarritoCompra = getItemsDetalleCarritoCompra;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var carritoCompraDetalle = require('../models/CarritoCompraDetalle');

var CarritoCompraDetalle = require('../models/CarritoCompraDetalle');

function addItemDetalleCarritoCompra(_x, _x2, _x3) {
  return _addItemDetalleCarritoCompra.apply(this, arguments);
}

function _addItemDetalleCarritoCompra() {
  _addItemDetalleCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, idUser, cantidadCarritoCompra, cantidadDisponible, etiqueta, referencia, lote, producto, nombreProducto, marca, talla, precioVenta, categoriaProducto, nombreCategoriaProducto, subCategoriaProducto, nombreSubCategoriaProducto, tipoNivelProducto, nombreNivelTipoProducto, sucursal, searchItem, itemDetalle, itemInserted, newCantidadCarritoCompra, itemUpdate;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, idUser = _req$body.idUser, cantidadCarritoCompra = _req$body.cantidadCarritoCompra, cantidadDisponible = _req$body.cantidadDisponible, etiqueta = _req$body.etiqueta, referencia = _req$body.referencia, lote = _req$body.lote, producto = _req$body.producto, nombreProducto = _req$body.nombreProducto, marca = _req$body.marca, talla = _req$body.talla, precioVenta = _req$body.precioVenta, categoriaProducto = _req$body.categoriaProducto, nombreCategoriaProducto = _req$body.nombreCategoriaProducto, subCategoriaProducto = _req$body.subCategoriaProducto, nombreSubCategoriaProducto = _req$body.nombreSubCategoriaProducto, tipoNivelProducto = _req$body.tipoNivelProducto, nombreNivelTipoProducto = _req$body.nombreNivelTipoProducto, sucursal = _req$body.sucursal;
            _context.next = 3;
            return CarritoCompraDetalle.findOne({
              $and: [{
                referencia: referencia
              }, {
                idUser: idUser
              }]
            });

          case 3:
            searchItem = _context.sent;

            if (searchItem) {
              _context.next = 18;
              break;
            }

            if (!(cantidadCarritoCompra <= cantidadDisponible)) {
              _context.next = 15;
              break;
            }

            itemDetalle = new carritoCompraDetalle({
              idUser: idUser,
              cantidadCarritoCompra: cantidadCarritoCompra,
              cantidadDisponible: cantidadDisponible,
              etiqueta: etiqueta,
              referencia: referencia,
              lote: lote,
              producto: producto,
              nombreProducto: nombreProducto,
              marca: marca,
              talla: talla,
              precioVenta: precioVenta,
              categoriaProducto: categoriaProducto,
              nombreCategoriaProducto: nombreCategoriaProducto,
              subCategoriaProducto: subCategoriaProducto,
              nombreSubCategoriaProducto: nombreSubCategoriaProducto,
              tipoNivelProducto: tipoNivelProducto,
              nombreNivelTipoProducto: nombreNivelTipoProducto,
              sucursal: sucursal
            });
            _context.next = 9;
            return itemDetalle.save();

          case 9:
            _context.next = 11;
            return CarritoCompraDetalle.findOne({
              $and: [{
                referencia: referencia
              }, {
                idUser: idUser
              }]
            });

          case 11:
            itemInserted = _context.sent;
            res.json(itemInserted);
            _context.next = 16;
            break;

          case 15:
            res.json(false);

          case 16:
            _context.next = 29;
            break;

          case 18:
            newCantidadCarritoCompra = searchItem.cantidadCarritoCompra + cantidadCarritoCompra;

            if (!(newCantidadCarritoCompra <= searchItem.cantidadDisponible)) {
              _context.next = 28;
              break;
            }

            _context.next = 22;
            return CarritoCompraDetalle.updateOne({
              $and: [{
                referencia: referencia
              }, {
                idUser: idUser
              }]
            }, {
              cantidadCarritoCompra: newCantidadCarritoCompra
            });

          case 22:
            _context.next = 24;
            return CarritoCompraDetalle.findOne({
              $and: [{
                referencia: referencia
              }, {
                idUser: idUser
              }]
            });

          case 24:
            itemUpdate = _context.sent;
            res.json(itemUpdate);
            _context.next = 29;
            break;

          case 28:
            res.json(false);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addItemDetalleCarritoCompra.apply(this, arguments);
}

function removeItemDetalleCarritoCompra(_x4, _x5, _x6) {
  return _removeItemDetalleCarritoCompra.apply(this, arguments);
}

function _removeItemDetalleCarritoCompra() {
  _removeItemDetalleCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.json('Remover');

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _removeItemDetalleCarritoCompra.apply(this, arguments);
}

function getItemsDetalleCarritoCompra(_x7, _x8, _x9) {
  return _getItemsDetalleCarritoCompra.apply(this, arguments);
}

function _getItemsDetalleCarritoCompra() {
  _getItemsDetalleCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var idUser, itemsDetalle;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idUser = req.body.idUser;
            _context3.next = 3;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 3:
            itemsDetalle = _context3.sent;
            res.json(itemsDetalle);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getItemsDetalleCarritoCompra.apply(this, arguments);
}