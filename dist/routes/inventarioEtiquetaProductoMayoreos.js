"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _inventarioEtiquetaProductoMayoreo = require("../controllers/inventarioEtiquetaProductoMayoreo.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
//Ruta para buscar en el inventario de Rosy Online
router.get('/buscar/:filtro', _inventarioEtiquetaProductoMayoreo.getSearchMayoreo); //Rutas Mayoreo Economico

router.get('/categoriaproductos/economico', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getCategoriaProductosEconomico);
router.get('/economico/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoEconomico);
router.get('/economico/:CategoriaProducto', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto); //Rutas Mayoreo Regular

router.get('/categoriaproductos/regular', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getCategoriaProductosRegular);
router.get('/regular/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoRegular);
router.get('/regular/:CategoriaProducto', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoRegularByCategoriaProducto); //Rutas Mayoreo Premiun

router.get('/categoriaproductos/premiun', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getCategoriaProductosPremiun);
router.get('/premiun/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoPremiun);
router.get('/premiun/:CategoriaProducto', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoPremiunByCategoriaProducto); //Rutas Mayoreo Platinum

router.get('/categoriaproductos/platinum', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getCategoriaProductosPlatinum);
router.get('/platinum/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoPlatinum);
router.get('/platinum/:CategoriaProducto', _verifyToken.verifyToken, _inventarioEtiquetaProductoMayoreo.getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto);
var _default = router;
exports["default"] = _default;