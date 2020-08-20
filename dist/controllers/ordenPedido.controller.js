"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPedidos = getPedidos;
exports.getItemsPedido = getItemsPedido;
exports.getOrderPay = getOrderPay;

var _paginatedResults = require("../middlewares/paginatedResults");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var OrdenPedido = require('../models/OrdenPedidos');

var OrdenPedidoDetalle = require('../models/OrdenPedidoDetalle');

var OrdenPedidoMayoreo = require('../models/OrdenPedidoMayoreo');

function getPedidos(_x, _x2) {
  return _getPedidos.apply(this, arguments);
}

function _getPedidos() {
  _getPedidos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var idUser, pedidos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idUser = req.body.idUser;
            _context.next = 3;
            return OrdenPedido.find({
              idUser: idUser
            }).sort({
              fecha: -1
            });

          case 3:
            pedidos = _context.sent;
            res.json({
              data: (0, _paginatedResults.paginatedResults)(req.query.page, req.query.limit, pedidos)
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPedidos.apply(this, arguments);
}

function getItemsPedido(_x3, _x4) {
  return _getItemsPedido.apply(this, arguments);
}

function _getItemsPedido() {
  _getItemsPedido = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var idPedido, itemsPedidoDetalle, itemsPedidoMayoreo, itemsPedido;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idPedido = req.body.idPedido;
            _context2.next = 3;
            return OrdenPedidoDetalle.find({
              idPedido: idPedido
            });

          case 3:
            itemsPedidoDetalle = _context2.sent;
            _context2.next = 6;
            return OrdenPedidoMayoreo.find({
              idPedido: idPedido
            });

          case 6:
            itemsPedidoMayoreo = _context2.sent;
            itemsPedido = itemsPedidoDetalle.concat(itemsPedidoMayoreo);
            res.json(itemsPedido);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getItemsPedido.apply(this, arguments);
}

function getOrderPay(_x5, _x6) {
  return _getOrderPay.apply(this, arguments);
}

function _getOrderPay() {
  _getOrderPay = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var pedidos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return OrdenPedido.find().sort({
              ordenPago: -1
            });

          case 2:
            pedidos = _context3.sent;

            if (pedidos[0]) {
              res.json(pedidos[0].ordenPago + 1);
            } else {
              res.json(1);
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOrderPay.apply(this, arguments);
}