"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pais = require("../controllers/pais.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
// /api/paises/
router.get('/', _verifyToken.verifyToken, _pais.getPaises);
var _default = router;
exports["default"] = _default;