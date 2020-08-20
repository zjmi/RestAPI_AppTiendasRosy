"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _region = require("../controllers/region.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
// /api/regiones/
router.get('/', _verifyToken.verifyToken, _region.getRegiones);
var _default = router;
exports["default"] = _default;