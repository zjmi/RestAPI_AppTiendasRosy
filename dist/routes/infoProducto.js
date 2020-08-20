"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _infoProducto = require("../controllers/infoProducto.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/', _verifyToken.verifyToken, _infoProducto.getInfoProducto);
var _default = router;
exports["default"] = _default;