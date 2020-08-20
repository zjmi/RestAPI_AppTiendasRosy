"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _departamento = require("../controllers/departamento.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
// /api/departamentos/
router.get('/', _verifyToken.verifyToken, _departamento.getDepartamentos);
var _default = router;
exports["default"] = _default;