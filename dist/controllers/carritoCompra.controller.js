"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemsCarritoCompra = getItemsCarritoCompra;
exports.getListCarritoCompra = getListCarritoCompra;
exports.getSubTotalCarritoCompra = getSubTotalCarritoCompra;
exports.removeItemCarritoCompra = removeItemCarritoCompra;
exports.clearCarritoCompra = clearCarritoCompra;

var _paginatedResults = require("../middlewares/paginatedResults");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CarritoCompraDetalle = require('../models/CarritoCompraDetalle');

var CarritoCompraMayoreo = require('../models/CarritoCompraMayoreo');

function getItemsCarritoCompra(_x, _x2, _x3) {
  return _getItemsCarritoCompra.apply(this, arguments);
}

function _getItemsCarritoCompra() {
  _getItemsCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var idUser, itemsDetalle, itemsMayoreo, items;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idUser = req.body.idUser;
            _context.next = 3;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 3:
            itemsDetalle = _context.sent;
            _context.next = 6;
            return CarritoCompraMayoreo.find({
              idUser: idUser
            });

          case 6:
            itemsMayoreo = _context.sent;
            items = itemsDetalle.concat(itemsMayoreo);
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, items)
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getItemsCarritoCompra.apply(this, arguments);
}

function getListCarritoCompra(_x4, _x5, _x6) {
  return _getListCarritoCompra.apply(this, arguments);
}

function _getListCarritoCompra() {
  _getListCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var idUser, itemsDetalle, itemsMayoreo, items;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idUser = req.body.idUser;
            _context2.next = 3;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 3:
            itemsDetalle = _context2.sent;
            _context2.next = 6;
            return CarritoCompraMayoreo.find({
              idUser: idUser
            });

          case 6:
            itemsMayoreo = _context2.sent;
            items = itemsDetalle.concat(itemsMayoreo);
            res.json(items);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getListCarritoCompra.apply(this, arguments);
}

function getSubTotalCarritoCompra(_x7, _x8, _x9) {
  return _getSubTotalCarritoCompra.apply(this, arguments);
}

function _getSubTotalCarritoCompra() {
  _getSubTotalCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, idUser, tazaCambio, itemsDetalle, itemsMayoreo, items, subTotalLempiras, subTotalDolar, i;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, idUser = _req$body.idUser, tazaCambio = _req$body.tazaCambio;
            _context3.next = 3;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 3:
            itemsDetalle = _context3.sent;
            _context3.next = 6;
            return CarritoCompraMayoreo.find({
              idUser: idUser
            });

          case 6:
            itemsMayoreo = _context3.sent;
            items = itemsDetalle.concat(itemsMayoreo);
            subTotalLempiras = 0;
            subTotalDolar = 0;

            for (i = 0; i < items.length; i++) {
              subTotalDolar = subTotalDolar + items[i].precioVenta * items[i].cantidadCarritoCompra, subTotalLempiras = subTotalLempiras + Math.round(items[i].precioVenta * items[i].cantidadCarritoCompra * tazaCambio);
            }

            res.json({
              subTotalLempiras: subTotalLempiras,
              subTotalDolar: subTotalDolar
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getSubTotalCarritoCompra.apply(this, arguments);
}

function removeItemCarritoCompra(_x10, _x11, _x12) {
  return _removeItemCarritoCompra.apply(this, arguments);
}

function _removeItemCarritoCompra() {
  _removeItemCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, itemCheckDetalle, itemCheckMayoreo;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.body.id;
            _context4.next = 3;
            return CarritoCompraDetalle.findOne({
              _id: id
            });

          case 3:
            itemCheckDetalle = _context4.sent;
            _context4.next = 6;
            return CarritoCompraMayoreo.findOne({
              _id: id
            });

          case 6:
            itemCheckMayoreo = _context4.sent;

            if (!(itemCheckDetalle !== null)) {
              _context4.next = 13;
              break;
            }

            _context4.next = 10;
            return CarritoCompraDetalle.deleteOne({
              _id: id
            });

          case 10:
            res.json(true);
            _context4.next = 20;
            break;

          case 13:
            if (!(itemCheckMayoreo !== null)) {
              _context4.next = 19;
              break;
            }

            _context4.next = 16;
            return CarritoCompraMayoreo.deleteOne({
              _id: id
            });

          case 16:
            res.json(true);
            _context4.next = 20;
            break;

          case 19:
            res.json(false);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _removeItemCarritoCompra.apply(this, arguments);
}

function clearCarritoCompra(_x13, _x14, _x15) {
  return _clearCarritoCompra.apply(this, arguments);
}

function _clearCarritoCompra() {
  _clearCarritoCompra = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var idUser;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idUser = req.body.idUser;
            _context5.next = 3;
            return CarritoCompraDetalle.deleteMany({
              idUser: idUser
            });

          case 3:
            _context5.next = 5;
            return CarritoCompraMayoreo.deleteMany({
              idUser: idUser
            });

          case 5:
            res.json(true);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _clearCarritoCompra.apply(this, arguments);
}