"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _municipio = require("../controllers/municipio.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
// /api/departamentos/
router.post('/', _verifyToken.verifyToken, _municipio.getMunicipios);
var _default = router;
exports["default"] = _default;