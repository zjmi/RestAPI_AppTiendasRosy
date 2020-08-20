"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _picture = require("../controllers/picture.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/', _verifyToken.verifyToken, _picture.getPictures);
router.post('/portadas', _verifyToken.verifyToken, _picture.getPortadas);
router.post('/portadaItemsEtiqueta', _verifyToken.verifyToken, _picture.getPicturesItemsEtiqueta);
router.post('/imagesItemReferencia', _verifyToken.verifyToken, _picture.getPicturesByReferencia);
var _default = router;
exports["default"] = _default;