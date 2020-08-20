"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _payment = require("../controllers/payment.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/depositPayment', _verifyToken.verifyToken, _payment.depositPayment);
router.post('/cardPayment', _verifyToken.verifyToken, _payment.cardPayment);
router.post('/cardkey', _verifyToken.verifyToken, _payment.pixelPay);
router.get('/success', _payment.success);
router.get('/cancel', _payment.cancel);
var _default = router;
exports["default"] = _default;