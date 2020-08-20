"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipoNivelProductoClase = require("../controllers/tipoNivelProductoClase.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.get('/', _verifyToken.verifyToken, _tipoNivelProductoClase.getTipoNivelProductosClases);
var _default = router;
exports["default"] = _default;