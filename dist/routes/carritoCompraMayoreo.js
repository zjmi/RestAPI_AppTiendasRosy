"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _carritoCompraMayoreo = require("../controllers/carritoCompraMayoreo.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/add', _verifyToken.verifyToken, _carritoCompraMayoreo.addItemMayoreoCarritoCompra);
router.post('/remove', _verifyToken.verifyToken, _carritoCompraMayoreo.removeItemMayoreoCarritoCompra);
router.post('/get', _verifyToken.verifyToken, _carritoCompraMayoreo.getItemsMayoreoCarritoCompra);
var _default = router;
exports["default"] = _default;