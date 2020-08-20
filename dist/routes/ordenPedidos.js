"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ordenPedido = require("../controllers/ordenPedido.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/', _verifyToken.verifyToken, _ordenPedido.getPedidos);
router.post('/items', _verifyToken.verifyToken, _ordenPedido.getItemsPedido);
router.post('/orderpay', _verifyToken.verifyToken, _ordenPedido.getOrderPay);
var _default = router;
exports["default"] = _default;