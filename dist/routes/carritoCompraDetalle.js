"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _carritoCompraDetalle = require("../controllers/carritoCompraDetalle.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/add', _verifyToken.verifyToken, _carritoCompraDetalle.addItemDetalleCarritoCompra);
router.post('/remove', _verifyToken.verifyToken, _carritoCompraDetalle.removeItemDetalleCarritoCompra);
router.post('/get', _verifyToken.verifyToken, _carritoCompraDetalle.getItemsDetalleCarritoCompra);
var _default = router;
exports["default"] = _default;