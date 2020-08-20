"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _inventarioEtiquetaProductoDetalle = require("../controllers/inventarioEtiquetaProductoDetalle.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();

/*--------------------------------Rutas---------------------------------------*/
//Inventario Rosy Online
router.get('/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getAllInventario);
router.get('/buscar/:filtro', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getSearchDetalle); //Ruta para buscar en el inventario de Rosy Online

router.get('/reciente', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioReciente); //Ruta para obtener el inventario Mas Reciente en Rosy Online

router.get('/reciente/randomten', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRandomTenItemsRopaInventarioReciente); //Ruta para obtener de manera aleatoria los primeros 10 items del inventario Mas Reciente en Rosy Online
//Inventario Calzado Rosy Online

router.get('/calzado/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCalzadoInventario); //Ruta para obtener el inventario de Calzado en Rosy Online

router.get('/calzado/nin', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCalzadoInventarioForNinaNino); //Ruta para obtener el inventario de Calzado en Rosy Online para Niño y Niña

router.get('/calzado/mujer', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCalzadoInventarioForMujer); //Ruta para obtener el inventario de Calzado en Rosy Online para Mujer

router.get('/calzado/hombre', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCalzadoInventarioForHombre); //Ruta para obtener el inventario de Calzado en Rosy Online para Hombre
//Inventario Ropa Rosy Online

router.get('/ropa/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventario); //Ruta para obtener el inventario de Ropa en Rosy Online

router.get('/ropa/nin', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForNinaNino); //Ruta para obtener el inventario de Ropa en Rosy Online para Niño y Niña

router.get('/ropa/nina', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForNina); //Ruta para obtener el inventario de Ropa en Rosy Online para Niña

router.get('/ropa/nino', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForNino); //Ruta para obtener el inventario de Ropa en Rosy Online para Niño

router.get('/ropa/bebe', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForBebe); //Ruta para obtener el inventario de Ropa en Rosy Online para Bebe

router.get('/ropa/mujer', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForMujer); //Ruta para obtener el inventario de Ropa en Rosy Online para Mujer

router.get('/ropa/hombre', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForHombre); //Ruta para obtener el inventario de Ropa en Rosy Online para Hombre

router.get('/ropa/hogar', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForHogar); //Ruta para obtener el inventario de Ropa en Rosy Online para el Hogar

router.get('/ropa/invierno', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForInvierno); //Ruta para obtener el inventario de Ropa en Rosy Online para el Invierno

router.get('/ropa/verano', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForVerano); //Ruta para obtener el inventario de Ropa en Rosy Online para el Verano

router.get('/ropa/eventos', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInventarioForEventos); //Ruta para obtener el inventario de Ropa en Rosy Online para Eventos

router.get('/ropa/deportiva', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaDeportivaInventario); //Ruta para obtener el inventario de Ropa Deportiva en Rosy Online
//Filtros Hombre

router.get('/ropa/hombre/camisas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCamisasForHombre); //Ruta para obtener camisas para Hombre

router.get('/ropa/hombre/sacos', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getSacosForHombre); //Ruta para obtener sacos para Hombre

router.get('/ropa/hombre/jeans', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getJeansForHombre); //Ruta para obtener jeans para Hombre

router.get('/ropa/hombre/tallasespeciales', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getTallasEspecialesForHombre); //Ruta para obtener tallas especiales para Hombre

router.get('/ropa/hombre/ropadeportiva', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaDeportivaForHombre); //Ruta para obtener ropa deportiva para Hombre

router.get('/ropa/hombre/pantalones', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getPantalonForHombre); //Ruta para obtener pantalones para Hombre

router.get('/ropa/hombre/shorts', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getShortForHombre); //Ruta para obtener shorts para Hombre
//Filtros Mujer

router.get('/ropa/mujer/vestidos', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getVestidoForMujer); //Ruta para obtener vestidos para Mujer

router.get('/ropa/mujer/jeans', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getJeansForMujer); //Ruta para obtener jeans para Mujer

router.get('/ropa/mujer/ropadeportiva', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaDeportivaForMujer); //Ruta para obtener ropa deportiva para Mujer

router.get('/ropa/mujer/blusas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getBlusaForMujer); //Ruta para obtener blusas para Mujer

router.get('/ropa/mujer/shorts', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getShortForMujer); //Ruta para obtener shorts para Mujer

router.get('/ropa/mujer/pantalones', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getPantalonForMujer); //Ruta para obtener pantalones para Mujer

router.get('/ropa/mujer/tallasespeciales', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getTallasEspecialesForMujer); //Ruta para obtener tallas especiales para Mujer

router.get('/ropa/mujer/faldas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getFaldaForMujer); //Ruta para obtener faldas para Mujer

router.get('/ropa/mujer/interior', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getInteriorForMujer); //Ruta para obtener ropa interior para Mujer

router.get('/ropa/mujer/chaquetas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getChaquetaForMujer); //Ruta para obtener chaquetas para Mujer
//Filtros Hogar

router.get('/ropa/hogar/cortinas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getCortinasForHogar); // Ruta para obtener cortinas para el Hogar

router.get('/ropa/hogar/toallas', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getToallasForHogar); // Ruta para obtener toallas para el Hogar

router.get('/ropa/hogar/edredones', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getEdredonesForHogar); // Ruta para obtener edredones para el Hogar
//Inventario Articulos Varios Rosy Online

router.get('/articulosvarios/all', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getArticulosVariosInventario); //Ruta para obtener el inventario de Articulos Varios en Rosy Online
//Filtros por Precio

router.get('/ropa/hombre/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaHombreByPrecio);
router.get('/ropa/mujer/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaMujerByPrecio);
router.get('/ropa/hogar/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaHogarByPrecio);
router.get('/ropa/nina/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaNinaByPrecio);
router.get('/ropa/nino/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaNinoByPrecio);
router.get('/ropa/bebe/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaBebeByPrecio);
router.get('/calzado/hombre/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getZapatosHombreByPrecio);
router.get('/calzado/mujer/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getZapatosMujerByPrecio);
router.get('/calzado/nin/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getZapatosNinoByPrecio);
router.get('/articulosvarios/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getArticulosVariosByPrecio);
router.get('/ropa/invierno/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaInviernoByPrecio);
router.get('/ropa/verano/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaVeranoByPrecio);
router.get('/ropa/eventos/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaEventosByPrecio);
router.get('/ropa/deportiva/:precio', _verifyToken.verifyToken, _inventarioEtiquetaProductoDetalle.getRopaDeportivaByPrecio);
var _default = router;
exports["default"] = _default;