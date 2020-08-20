"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardPayment = cardPayment;
exports.depositPayment = depositPayment;
exports.pixelPay = pixelPay;
exports.success = success;
exports.cancel = cancel;

var _depositPaymentEmail = require("../middlewares/depositPaymentEmail");

var _cardPaymentEmail = require("../middlewares/cardPaymentEmail");

var _notificationEmailDepositPayment = require("../middlewares/notificationEmailDepositPayment");

var _notificationEmailCardPayment = require("../middlewares/notificationEmailCardPayment");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require('../models/Users');

var OrdenPedido = require('../models/OrdenPedidos');

var CoordenadasEnvio = require('../models/CoordenadasEnvios');

var CarritoCompraDetalle = require('../models/CarritoCompraDetalle');

var CarritoCompraMayoreo = require('../models/CarritoCompraMayoreo');

var OrdenPedidoDetalle = require('../models/OrdenPedidoDetalle');

var OrdenPedidoMayoreo = require('../models/OrdenPedidoMayoreo');

var Producto = require('../models/Producto');

function cardPayment(_x, _x2) {
  return _cardPayment.apply(this, arguments);
}

function _cardPayment() {
  _cardPayment = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var lugarEnvio, _req$body, idUser, orderPay, metodoEnvio, tienda, tazaCambio, subtotalLempiras, costoEnvioLempiras, totalLempiras, subtotal, costoEnvio, total, user, direccionEnvio, _req$body2, departamentoAlterno, ciudadAlterna, direccionAlterna, numeroCasaAlterna, latitudAlter, longitudAlter, f, d, m, a, fecha, numeroPedido, numeroReferencia, ordenPedido, ordenPedidoInserted, _direccionEnvio, _req$body3, _latitudAlter, _longitudAlter, coordenadaEnvio, _coordenadaEnvio, itemsDetalle, itemsMayoreo, items, i, ordenPedidoDetalle, itemsRemoveCarritoCompraDetalle, j, userItem, referenciaItem, itemRemove, ordenPedidoMayoreo, itemsRemoveCarritoCompraMayoreo, _j, _userItem, productoItem, _itemRemove, newQuantity, _userItem2, _productoItem, newCantidadCarritoCompra;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, idUser = _req$body.idUser, orderPay = _req$body.orderPay, metodoEnvio = _req$body.metodoEnvio, tienda = _req$body.tienda, tazaCambio = _req$body.tazaCambio, subtotalLempiras = _req$body.subtotalLempiras, costoEnvioLempiras = _req$body.costoEnvioLempiras, totalLempiras = _req$body.totalLempiras, subtotal = _req$body.subtotal, costoEnvio = _req$body.costoEnvio, total = _req$body.total;
            _context.next = 3;
            return User.findOne({
              _id: idUser
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context.sent;

            if (metodoEnvio === 'tienda') {
              lugarEnvio = tienda;
            }

            if (metodoEnvio === 'casa') {
              direccionEnvio = req.body.direccionEnvio;

              if (direccionEnvio === 'alterna') {
                _req$body2 = req.body, departamentoAlterno = _req$body2.departamentoAlterno, ciudadAlterna = _req$body2.ciudadAlterna, direccionAlterna = _req$body2.direccionAlterna, numeroCasaAlterna = _req$body2.numeroCasaAlterna, latitudAlter = _req$body2.latitudAlter, longitudAlter = _req$body2.longitudAlter;
                lugarEnvio = departamentoAlterno + ', ' + ciudadAlterna + ', ' + direccionAlterna + ', Casa: ' + numeroCasaAlterna + ", Ubicaci\xF3n: https://www.google.com/maps/@".concat(latitudAlter, ",").concat(longitudAlter, ",17.25z");
              } else {
                lugarEnvio = user.departamento + ', ' + user.ciudad + ', ' + user.direccion + ', Casa: ' + user.numeroCasa + ", Ubicaci\xF3n: https://www.google.com/maps/@".concat(user.latitud, ",").concat(user.longitud, ",17.25z");
              }
            }

            f = new Date();
            d = f.getDate();
            m = f.getMonth() + 1;
            a = f.getFullYear();

            if (d < 10) {
              d = '0' + d;
            }

            if (m < 10) {
              m = '0' + m;
            }

            fecha = d + "/" + m + "/" + a;
            numeroPedido = Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
            numeroReferencia = a + "" + m + "" + d + Math.floor(Math.random() * (99999 - 1000) + 1000).toString();
            ordenPedido = new OrdenPedido({
              fecha: new Date(),
              ordenPago: orderPay,
              numeroPedido: numeroPedido,
              numeroReferencia: numeroReferencia,
              idUser: idUser,
              nombre: user.nombres + ' ' + user.apellidos,
              numeroIdentidad: user.numeroIdentidad,
              telefonoMovil: user.telefonoMovil,
              metodoPago: 'Tarjeta de crédito/débito',
              subtotal: subtotal,
              costoEnvio: costoEnvio,
              total: total,
              estadoPedido: false
            });
            _context.next = 18;
            return ordenPedido.save();

          case 18:
            _context.next = 20;
            return OrdenPedido.findOne({
              numeroPedido: numeroPedido,
              numeroReferencia: numeroReferencia
            });

          case 20:
            ordenPedidoInserted = _context.sent;

            if (!(metodoEnvio === 'casa')) {
              _context.next = 33;
              break;
            }

            _direccionEnvio = req.body.direccionEnvio;

            if (!(_direccionEnvio === 'alterna')) {
              _context.next = 30;
              break;
            }

            _req$body3 = req.body, _latitudAlter = _req$body3.latitudAlter, _longitudAlter = _req$body3.longitudAlter;
            coordenadaEnvio = new CoordenadasEnvio({
              idPedido: ordenPedidoInserted._id,
              latitud: _latitudAlter,
              longitud: _longitudAlter
            });
            _context.next = 28;
            return coordenadaEnvio.save();

          case 28:
            _context.next = 33;
            break;

          case 30:
            _coordenadaEnvio = new CoordenadasEnvio({
              idPedido: ordenPedidoInserted._id,
              latitud: user.latitud,
              longitud: user.longitud
            });
            _context.next = 33;
            return _coordenadaEnvio.save();

          case 33:
            _context.next = 35;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 35:
            itemsDetalle = _context.sent;
            _context.next = 38;
            return CarritoCompraMayoreo.find({
              idUser: idUser
            });

          case 38:
            itemsMayoreo = _context.sent;
            items = itemsDetalle.concat(itemsMayoreo);
            i = 0;

          case 41:
            if (!(i < items.length)) {
              _context.next = 99;
              break;
            }

            if (!(items[i].sucursal === 'HNR036')) {
              _context.next = 64;
              break;
            }

            ordenPedidoDetalle = new OrdenPedidoDetalle({
              idPedido: ordenPedidoInserted._id,
              direccionEnvio: lugarEnvio,
              cantidad: items[i].cantidadCarritoCompra,
              etiqueta: items[i].etiqueta,
              referencia: items[i].referencia,
              lote: items[i].lote,
              producto: items[i].producto,
              nombreProducto: items[i].nombreProducto,
              marca: items[i].marca,
              talla: items[i].talla,
              precioVenta: items[i].precioVenta,
              subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
              categoriaProducto: items[i].categoriaProducto,
              nombreCategoriaProducto: items[i].nombreCategoriaProducto,
              subCategoriaProducto: items[i].subCategoriaProducto,
              nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
              tipoNivelProducto: items[i].tipoNivelProducto,
              nombreNivelTipoProducto: items[i].nombreNivelTipoProducto,
              sucursal: items[i].sucursal
            });
            _context.next = 46;
            return ordenPedidoDetalle.save();

          case 46:
            _context.next = 48;
            return Producto.updateOne({
              referencia: items[i].referencia
            }, {
              estado: true
            });

          case 48:
            _context.next = 50;
            return CarritoCompraDetalle.find({
              referencia: items[i].referencia
            });

          case 50:
            itemsRemoveCarritoCompraDetalle = _context.sent;
            j = 0;

          case 52:
            if (!(j < itemsRemoveCarritoCompraDetalle.length)) {
              _context.next = 64;
              break;
            }

            if (!(itemsRemoveCarritoCompraDetalle[j].cantidadDisponible === 1)) {
              _context.next = 61;
              break;
            }

            userItem = itemsRemoveCarritoCompraDetalle[j].idUser;
            referenciaItem = itemsRemoveCarritoCompraDetalle[j].referencia;
            _context.next = 58;
            return CarritoCompraDetalle.findOne({
              idUser: userItem,
              referencia: referenciaItem
            });

          case 58:
            itemRemove = _context.sent;
            _context.next = 61;
            return CarritoCompraDetalle.remove({
              _id: itemRemove._id
            });

          case 61:
            j++;
            _context.next = 52;
            break;

          case 64:
            if (!(items[i].sucursal === 'HNCD01')) {
              _context.next = 96;
              break;
            }

            ordenPedidoMayoreo = new OrdenPedidoMayoreo({
              idPedido: ordenPedidoInserted._id,
              direccionEnvio: tienda,
              cantidad: items[i].cantidadCarritoCompra,
              producto: items[i].producto,
              nombreProducto: items[i].nombreProducto,
              precioVenta: items[i].precioVenta,
              subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
              categoriaProducto: items[i].categoriaProducto,
              nombreCategoriaProducto: items[i].nombreCategoriaProducto,
              subCategoriaProducto: items[i].subCategoriaProducto,
              nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
              sucursal: items[i].sucursal
            });
            _context.next = 68;
            return ordenPedidoMayoreo.save();

          case 68:
            _context.next = 70;
            return CarritoCompraMayoreo.find({
              producto: items[i].producto
            });

          case 70:
            itemsRemoveCarritoCompraMayoreo = _context.sent;
            _j = 0;

          case 72:
            if (!(_j < itemsRemoveCarritoCompraMayoreo.length)) {
              _context.next = 96;
              break;
            }

            if (!(itemsRemoveCarritoCompraMayoreo[_j].cantidadDisponible - items[i].cantidadCarritoCompra <= 0)) {
              _context.next = 83;
              break;
            }

            _userItem = itemsRemoveCarritoCompraMayoreo[_j].idUser;
            productoItem = itemsRemoveCarritoCompraMayoreo[_j].producto;
            _context.next = 78;
            return CarritoCompraMayoreo.findOne({
              idUser: _userItem,
              producto: productoItem
            });

          case 78:
            _itemRemove = _context.sent;
            _context.next = 81;
            return CarritoCompraMayoreo.remove({
              _id: _itemRemove._id
            });

          case 81:
            _context.next = 93;
            break;

          case 83:
            newQuantity = itemsRemoveCarritoCompraMayoreo[_j].cantidadDisponible - items[i].cantidadCarritoCompra;
            _userItem2 = itemsRemoveCarritoCompraMayoreo[_j].idUser;
            _productoItem = itemsRemoveCarritoCompraMayoreo[_j].producto;
            _context.next = 88;
            return CarritoCompraMayoreo.updateOne({
              $and: [{
                producto: _productoItem
              }, {
                idUser: _userItem2
              }]
            }, {
              cantidadDisponible: newQuantity
            });

          case 88:
            if (!(itemsRemoveCarritoCompraMayoreo[_j].cantidadCarritoCompra > newQuantity)) {
              _context.next = 93;
              break;
            }

            newCantidadCarritoCompra = itemsRemoveCarritoCompraMayoreo[_j].cantidadCarritoCompra;

            do {
              newCantidadCarritoCompra = newCantidadCarritoCompra - 1;
            } while (newCantidadCarritoCompra > newQuantity); //Ejecuta hasta que se falsa


            _context.next = 93;
            return CarritoCompraMayoreo.updateOne({
              $and: [{
                producto: _productoItem
              }, {
                idUser: _userItem2
              }]
            }, {
              cantidadCarritoCompra: newCantidadCarritoCompra
            });

          case 93:
            _j++;
            _context.next = 72;
            break;

          case 96:
            i++;
            _context.next = 41;
            break;

          case 99:
            if (ordenPedidoInserted !== null) {
              (0, _cardPaymentEmail.cardPaymentEmail)(user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
              (0, _notificationEmailCardPayment.notificationEmailCardPayment)('zamir.uchida@gmail.com', user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
              res.json(true);
            } else {
              res.json(false);
            }

          case 100:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cardPayment.apply(this, arguments);
}

function depositPayment(_x3, _x4) {
  return _depositPayment.apply(this, arguments);
}

function _depositPayment() {
  _depositPayment = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var lugarEnvio, _req$body4, idUser, orderPay, metodoEnvio, tienda, tazaCambio, subtotalLempiras, costoEnvioLempiras, totalLempiras, subtotal, costoEnvio, total, user, direccionEnvio, _req$body5, departamentoAlterno, ciudadAlterna, direccionAlterna, numeroCasaAlterna, latitudAlter, longitudAlter, f, d, m, a, fecha, numeroPedido, numeroReferencia, ordenPedido, ordenPedidoInserted, _direccionEnvio2, _req$body6, _latitudAlter2, _longitudAlter2, coordenadaEnvio, _coordenadaEnvio2, itemsDetalle, itemsMayoreo, items, i, ordenPedidoDetalle, itemsRemoveCarritoCompraDetalle, j, userItem, referenciaItem, itemRemove, ordenPedidoMayoreo, itemsRemoveCarritoCompraMayoreo, _j2, _userItem3, productoItem, _itemRemove2, newQuantity, _userItem4, _productoItem2, newCantidadCarritoCompra;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body4 = req.body, idUser = _req$body4.idUser, orderPay = _req$body4.orderPay, metodoEnvio = _req$body4.metodoEnvio, tienda = _req$body4.tienda, tazaCambio = _req$body4.tazaCambio, subtotalLempiras = _req$body4.subtotalLempiras, costoEnvioLempiras = _req$body4.costoEnvioLempiras, totalLempiras = _req$body4.totalLempiras, subtotal = _req$body4.subtotal, costoEnvio = _req$body4.costoEnvio, total = _req$body4.total;
            _context2.next = 3;
            return User.findOne({
              _id: idUser
            }, {
              contrasenia: 0
            });

          case 3:
            user = _context2.sent;

            if (metodoEnvio === 'tienda') {
              lugarEnvio = tienda;
            }

            if (metodoEnvio === 'casa') {
              direccionEnvio = req.body.direccionEnvio;

              if (direccionEnvio === 'alterna') {
                _req$body5 = req.body, departamentoAlterno = _req$body5.departamentoAlterno, ciudadAlterna = _req$body5.ciudadAlterna, direccionAlterna = _req$body5.direccionAlterna, numeroCasaAlterna = _req$body5.numeroCasaAlterna, latitudAlter = _req$body5.latitudAlter, longitudAlter = _req$body5.longitudAlter;
                lugarEnvio = departamentoAlterno + ', ' + ciudadAlterna + ', ' + direccionAlterna + ', Casa: ' + numeroCasaAlterna + ", Ubicaci\xF3n: https://www.google.com/maps/@".concat(latitudAlter, ",").concat(longitudAlter, ",17.25z");
              } else {
                lugarEnvio = user.departamento + ', ' + user.ciudad + ', ' + user.direccion + ', Casa: ' + user.numeroCasa + ", Ubicaci\xF3n: https://www.google.com/maps/@".concat(user.latitud, ",").concat(user.longitud, ",17.25z");
              }
            }

            f = new Date();
            d = f.getDate();
            m = f.getMonth() + 1;
            a = f.getFullYear();

            if (d < 10) {
              d = '0' + d;
            }

            if (m < 10) {
              m = '0' + m;
            }

            fecha = d + "/" + m + "/" + a;
            numeroPedido = Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
            numeroReferencia = a + "" + m + "" + d + Math.floor(Math.random() * (99999 - 1000) + 1000).toString();
            ordenPedido = new OrdenPedido({
              fecha: new Date(),
              ordenPago: orderPay,
              numeroPedido: numeroPedido,
              numeroReferencia: numeroReferencia,
              idUser: idUser,
              nombre: user.nombres + ' ' + user.apellidos,
              numeroIdentidad: user.numeroIdentidad,
              telefonoMovil: user.telefonoMovil,
              metodoPago: 'Depósito/Transferencia Bancaria',
              subtotal: subtotal,
              costoEnvio: costoEnvio,
              total: total,
              estadoPedido: false
            });
            _context2.next = 18;
            return ordenPedido.save();

          case 18:
            _context2.next = 20;
            return OrdenPedido.findOne({
              numeroPedido: numeroPedido,
              numeroReferencia: numeroReferencia
            });

          case 20:
            ordenPedidoInserted = _context2.sent;

            if (!(metodoEnvio === 'casa')) {
              _context2.next = 33;
              break;
            }

            _direccionEnvio2 = req.body.direccionEnvio;

            if (!(_direccionEnvio2 === 'alterna')) {
              _context2.next = 30;
              break;
            }

            _req$body6 = req.body, _latitudAlter2 = _req$body6.latitudAlter, _longitudAlter2 = _req$body6.longitudAlter;
            coordenadaEnvio = new CoordenadasEnvio({
              idPedido: ordenPedidoInserted._id,
              latitud: _latitudAlter2,
              longitud: _longitudAlter2
            });
            _context2.next = 28;
            return coordenadaEnvio.save();

          case 28:
            _context2.next = 33;
            break;

          case 30:
            _coordenadaEnvio2 = new CoordenadasEnvio({
              idPedido: ordenPedidoInserted._id,
              latitud: user.latitud,
              longitud: user.longitud
            });
            _context2.next = 33;
            return _coordenadaEnvio2.save();

          case 33:
            _context2.next = 35;
            return CarritoCompraDetalle.find({
              idUser: idUser
            });

          case 35:
            itemsDetalle = _context2.sent;
            _context2.next = 38;
            return CarritoCompraMayoreo.find({
              idUser: idUser
            });

          case 38:
            itemsMayoreo = _context2.sent;
            items = itemsDetalle.concat(itemsMayoreo);
            i = 0;

          case 41:
            if (!(i < items.length)) {
              _context2.next = 99;
              break;
            }

            if (!(items[i].sucursal === 'HNR036')) {
              _context2.next = 64;
              break;
            }

            ordenPedidoDetalle = new OrdenPedidoDetalle({
              idPedido: ordenPedidoInserted._id,
              direccionEnvio: lugarEnvio,
              cantidad: items[i].cantidadCarritoCompra,
              etiqueta: items[i].etiqueta,
              referencia: items[i].referencia,
              lote: items[i].lote,
              producto: items[i].producto,
              nombreProducto: items[i].nombreProducto,
              marca: items[i].marca,
              talla: items[i].talla,
              precioVenta: items[i].precioVenta,
              subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
              categoriaProducto: items[i].categoriaProducto,
              nombreCategoriaProducto: items[i].nombreCategoriaProducto,
              subCategoriaProducto: items[i].subCategoriaProducto,
              nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
              tipoNivelProducto: items[i].tipoNivelProducto,
              nombreNivelTipoProducto: items[i].nombreNivelTipoProducto,
              sucursal: items[i].sucursal
            });
            _context2.next = 46;
            return ordenPedidoDetalle.save();

          case 46:
            _context2.next = 48;
            return Producto.updateOne({
              referencia: items[i].referencia
            }, {
              estado: true
            });

          case 48:
            _context2.next = 50;
            return CarritoCompraDetalle.find({
              referencia: items[i].referencia
            });

          case 50:
            itemsRemoveCarritoCompraDetalle = _context2.sent;
            j = 0;

          case 52:
            if (!(j < itemsRemoveCarritoCompraDetalle.length)) {
              _context2.next = 64;
              break;
            }

            if (!(itemsRemoveCarritoCompraDetalle[j].cantidadDisponible === 1)) {
              _context2.next = 61;
              break;
            }

            userItem = itemsRemoveCarritoCompraDetalle[j].idUser;
            referenciaItem = itemsRemoveCarritoCompraDetalle[j].referencia;
            _context2.next = 58;
            return CarritoCompraDetalle.findOne({
              idUser: userItem,
              referencia: referenciaItem
            });

          case 58:
            itemRemove = _context2.sent;
            _context2.next = 61;
            return CarritoCompraDetalle.remove({
              _id: itemRemove._id
            });

          case 61:
            j++;
            _context2.next = 52;
            break;

          case 64:
            if (!(items[i].sucursal === 'HNCD01')) {
              _context2.next = 96;
              break;
            }

            ordenPedidoMayoreo = new OrdenPedidoMayoreo({
              idPedido: ordenPedidoInserted._id,
              direccionEnvio: tienda,
              cantidad: items[i].cantidadCarritoCompra,
              producto: items[i].producto,
              nombreProducto: items[i].nombreProducto,
              precioVenta: items[i].precioVenta,
              subtotal: items[i].precioVenta * items[i].cantidadCarritoCompra,
              categoriaProducto: items[i].categoriaProducto,
              nombreCategoriaProducto: items[i].nombreCategoriaProducto,
              subCategoriaProducto: items[i].subCategoriaProducto,
              nombreSubCategoriaProducto: items[i].nombreSubCategoriaProducto,
              sucursal: items[i].sucursal
            });
            _context2.next = 68;
            return ordenPedidoMayoreo.save();

          case 68:
            _context2.next = 70;
            return CarritoCompraMayoreo.find({
              producto: items[i].producto
            });

          case 70:
            itemsRemoveCarritoCompraMayoreo = _context2.sent;
            _j2 = 0;

          case 72:
            if (!(_j2 < itemsRemoveCarritoCompraMayoreo.length)) {
              _context2.next = 96;
              break;
            }

            if (!(itemsRemoveCarritoCompraMayoreo[_j2].cantidadDisponible - items[i].cantidadCarritoCompra <= 0)) {
              _context2.next = 83;
              break;
            }

            _userItem3 = itemsRemoveCarritoCompraMayoreo[_j2].idUser;
            productoItem = itemsRemoveCarritoCompraMayoreo[_j2].producto;
            _context2.next = 78;
            return CarritoCompraMayoreo.findOne({
              idUser: _userItem3,
              producto: productoItem
            });

          case 78:
            _itemRemove2 = _context2.sent;
            _context2.next = 81;
            return CarritoCompraMayoreo.remove({
              _id: _itemRemove2._id
            });

          case 81:
            _context2.next = 93;
            break;

          case 83:
            newQuantity = itemsRemoveCarritoCompraMayoreo[_j2].cantidadDisponible - items[i].cantidadCarritoCompra;
            _userItem4 = itemsRemoveCarritoCompraMayoreo[_j2].idUser;
            _productoItem2 = itemsRemoveCarritoCompraMayoreo[_j2].producto;
            _context2.next = 88;
            return CarritoCompraMayoreo.updateOne({
              $and: [{
                producto: _productoItem2
              }, {
                idUser: _userItem4
              }]
            }, {
              cantidadDisponible: newQuantity
            });

          case 88:
            if (!(itemsRemoveCarritoCompraMayoreo[_j2].cantidadCarritoCompra > newQuantity)) {
              _context2.next = 93;
              break;
            }

            newCantidadCarritoCompra = itemsRemoveCarritoCompraMayoreo[_j2].cantidadCarritoCompra;

            do {
              newCantidadCarritoCompra = newCantidadCarritoCompra - 1;
            } while (newCantidadCarritoCompra > newQuantity); //Ejecuta hasta que se falsa


            _context2.next = 93;
            return CarritoCompraMayoreo.updateOne({
              $and: [{
                producto: _productoItem2
              }, {
                idUser: _userItem4
              }]
            }, {
              cantidadCarritoCompra: newCantidadCarritoCompra
            });

          case 93:
            _j2++;
            _context2.next = 72;
            break;

          case 96:
            i++;
            _context2.next = 41;
            break;

          case 99:
            if (ordenPedidoInserted !== null) {
              (0, _depositPaymentEmail.depositPaymentEmail)(user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
              (0, _notificationEmailDepositPayment.notificationEmailDepositPayment)('zamir.uchida@gmail.com', user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio);
              res.json(true);
            } else {
              res.json(false);
            }

          case 100:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _depositPayment.apply(this, arguments);
}

function pixelPay(_x5, _x6) {
  return _pixelPay.apply(this, arguments);
}

function _pixelPay() {
  _pixelPay = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var key_id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            key_id = process.env.PIXELPAY_KEY_ID;
            res.json(key_id);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _pixelPay.apply(this, arguments);
}

function success(req, res) {
  res.render('success');
}

function cancel(req, res) {
  res.render('cancel');
}