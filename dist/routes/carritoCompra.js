"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _carritoCompra = require("../controllers/carritoCompra.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/get', _verifyToken.verifyToken, _carritoCompra.getItemsCarritoCompra);
router.post('/getlist', _verifyToken.verifyToken, _carritoCompra.getListCarritoCompra);
router.post('/getsubtotal', _verifyToken.verifyToken, _carritoCompra.getSubTotalCarritoCompra);
router.post('/remove', _verifyToken.verifyToken, _carritoCompra.removeItemCarritoCompra);
router.post('/clear', _verifyToken.verifyToken, _carritoCompra.clearCarritoCompra);
var _default = router;
exports["default"] = _default;