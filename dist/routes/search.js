"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _search = require("../controllers/search.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.get('/all/:filtro', _verifyToken.verifyToken, _search.getSearch);
var _default = router;
exports["default"] = _default;