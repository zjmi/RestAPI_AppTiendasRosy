import { Router } from 'express';
const router = Router();

import {
    getAllInventario,
    getRopaInventarioReciente,
    getCalzadoInventario,
    getCalzadoInventarioForNinaNino,
    getCalzadoInventarioForMujer,
    getCalzadoInventarioForHombre,
    getArticulosVariosInventario,
    getRopaInventario,
    getRopaInventarioForNinaNino,
    getRopaInventarioForNina,
    getRopaInventarioForNino,
    getRopaInventarioForBebe,
    getRopaInventarioForMujer,
    getRopaInventarioForHombre,
    getRopaInventarioForHogar,
    getRopaInventarioForInvierno,
    getRopaInventarioForVerano,
    getRopaInventarioForEventos,
    getRopaDeportivaInventario,
    getRandomTenItemsRopaInventarioReciente,
    getSearchDetalle,
    getCamisasForHombre,
    getSacosForHombre,
    getJeansForHombre,
    getTallasEspecialesForHombre,
    getRopaDeportivaForHombre,
    getPantalonForHombre,
    getShortForHombre,
    getVestidoForMujer,
    getJeansForMujer,
    getRopaDeportivaForMujer,
    getBlusaForMujer,
    getShortForMujer,
    getPantalonForMujer,
    getTallasEspecialesForMujer,
    getFaldaForMujer,
    getInteriorForMujer,
    getChaquetaForMujer,
    getCortinasForHogar,
    getToallasForHogar,
    getEdredonesForHogar,
    getRopaHombreByPrecio,
    getRopaMujerByPrecio,
    getRopaHogarByPrecio,
    getRopaNinaByPrecio,
    getRopaNinoByPrecio,
    getRopaBebeByPrecio,
    getZapatosHombreByPrecio,
    getZapatosMujerByPrecio,
    getZapatosNinoByPrecio,
    getArticulosVariosByPrecio,
    getRopaVeranoByPrecio,
    getRopaInviernoByPrecio,
    getRopaEventosByPrecio,
    getRopaDeportivaByPrecio
}
    from '../controllers/inventarioEtiquetaProductoDetalle.controller';

import { verifyToken } from '../middlewares/verifyToken';

/*--------------------------------Rutas---------------------------------------*/

//Inventario Rosy Online
router.get('/all', verifyToken, getAllInventario);
router.get('/buscar/:filtro', verifyToken, getSearchDetalle); //Ruta para buscar en el inventario de Rosy Online
router.get('/reciente', verifyToken, getRopaInventarioReciente);//Ruta para obtener el inventario Mas Reciente en Rosy Online
router.get('/reciente/randomten', verifyToken, getRandomTenItemsRopaInventarioReciente);//Ruta para obtener de manera aleatoria los primeros 10 items del inventario Mas Reciente en Rosy Online

//Inventario Calzado Rosy Online
router.get('/calzado/all', verifyToken, getCalzadoInventario); //Ruta para obtener el inventario de Calzado en Rosy Online
router.get('/calzado/nin', verifyToken, getCalzadoInventarioForNinaNino); //Ruta para obtener el inventario de Calzado en Rosy Online para Niño y Niña
router.get('/calzado/mujer', verifyToken, getCalzadoInventarioForMujer); //Ruta para obtener el inventario de Calzado en Rosy Online para Mujer
router.get('/calzado/hombre', verifyToken, getCalzadoInventarioForHombre); //Ruta para obtener el inventario de Calzado en Rosy Online para Hombre

//Inventario Ropa Rosy Online
router.get('/ropa/all', verifyToken, getRopaInventario);//Ruta para obtener el inventario de Ropa en Rosy Online
router.get('/ropa/nin', verifyToken, getRopaInventarioForNinaNino);//Ruta para obtener el inventario de Ropa en Rosy Online para Niño y Niña
router.get('/ropa/nina', verifyToken, getRopaInventarioForNina);//Ruta para obtener el inventario de Ropa en Rosy Online para Niña
router.get('/ropa/nino', verifyToken, getRopaInventarioForNino);//Ruta para obtener el inventario de Ropa en Rosy Online para Niño
router.get('/ropa/bebe', verifyToken, getRopaInventarioForBebe);//Ruta para obtener el inventario de Ropa en Rosy Online para Bebe
router.get('/ropa/mujer', verifyToken, getRopaInventarioForMujer);//Ruta para obtener el inventario de Ropa en Rosy Online para Mujer
router.get('/ropa/hombre', verifyToken, getRopaInventarioForHombre);//Ruta para obtener el inventario de Ropa en Rosy Online para Hombre
router.get('/ropa/hogar', verifyToken, getRopaInventarioForHogar);//Ruta para obtener el inventario de Ropa en Rosy Online para el Hogar
router.get('/ropa/invierno', verifyToken, getRopaInventarioForInvierno);//Ruta para obtener el inventario de Ropa en Rosy Online para el Invierno
router.get('/ropa/verano', verifyToken, getRopaInventarioForVerano);//Ruta para obtener el inventario de Ropa en Rosy Online para el Verano
router.get('/ropa/eventos', verifyToken, getRopaInventarioForEventos);//Ruta para obtener el inventario de Ropa en Rosy Online para Eventos
router.get('/ropa/deportiva', verifyToken, getRopaDeportivaInventario);//Ruta para obtener el inventario de Ropa Deportiva en Rosy Online

//Filtros Hombre
router.get('/ropa/hombre/camisas', verifyToken, getCamisasForHombre); //Ruta para obtener camisas para Hombre
router.get('/ropa/hombre/sacos', verifyToken, getSacosForHombre); //Ruta para obtener sacos para Hombre
router.get('/ropa/hombre/jeans', verifyToken, getJeansForHombre); //Ruta para obtener jeans para Hombre
router.get('/ropa/hombre/tallasespeciales', verifyToken, getTallasEspecialesForHombre); //Ruta para obtener tallas especiales para Hombre
router.get('/ropa/hombre/ropadeportiva', verifyToken, getRopaDeportivaForHombre); //Ruta para obtener ropa deportiva para Hombre
router.get('/ropa/hombre/pantalones', verifyToken, getPantalonForHombre); //Ruta para obtener pantalones para Hombre
router.get('/ropa/hombre/shorts', verifyToken, getShortForHombre); //Ruta para obtener shorts para Hombre

//Filtros Mujer
router.get('/ropa/mujer/vestidos', verifyToken, getVestidoForMujer); //Ruta para obtener vestidos para Mujer
router.get('/ropa/mujer/jeans', verifyToken, getJeansForMujer); //Ruta para obtener jeans para Mujer
router.get('/ropa/mujer/ropadeportiva', verifyToken, getRopaDeportivaForMujer); //Ruta para obtener ropa deportiva para Mujer
router.get('/ropa/mujer/blusas', verifyToken, getBlusaForMujer); //Ruta para obtener blusas para Mujer
router.get('/ropa/mujer/shorts', verifyToken, getShortForMujer); //Ruta para obtener shorts para Mujer
router.get('/ropa/mujer/pantalones', verifyToken, getPantalonForMujer); //Ruta para obtener pantalones para Mujer
router.get('/ropa/mujer/tallasespeciales', verifyToken, getTallasEspecialesForMujer); //Ruta para obtener tallas especiales para Mujer
router.get('/ropa/mujer/faldas', verifyToken, getFaldaForMujer); //Ruta para obtener faldas para Mujer
router.get('/ropa/mujer/interior', verifyToken, getInteriorForMujer); //Ruta para obtener ropa interior para Mujer
router.get('/ropa/mujer/chaquetas', verifyToken, getChaquetaForMujer); //Ruta para obtener chaquetas para Mujer

//Filtros Hogar
router.get('/ropa/hogar/cortinas', verifyToken, getCortinasForHogar); // Ruta para obtener cortinas para el Hogar
router.get('/ropa/hogar/toallas', verifyToken, getToallasForHogar); // Ruta para obtener toallas para el Hogar
router.get('/ropa/hogar/edredones', verifyToken, getEdredonesForHogar); // Ruta para obtener edredones para el Hogar

//Inventario Articulos Varios Rosy Online
router.get('/articulosvarios/all', verifyToken, getArticulosVariosInventario);//Ruta para obtener el inventario de Articulos Varios en Rosy Online

//Filtros por Precio
router.get('/ropa/hombre/:precio', verifyToken, getRopaHombreByPrecio);
router.get('/ropa/mujer/:precio', verifyToken, getRopaMujerByPrecio);
router.get('/ropa/hogar/:precio', verifyToken, getRopaHogarByPrecio);
router.get('/ropa/nina/:precio', verifyToken, getRopaNinaByPrecio);
router.get('/ropa/nino/:precio', verifyToken, getRopaNinoByPrecio);
router.get('/ropa/bebe/:precio', verifyToken, getRopaBebeByPrecio);
router.get('/calzado/hombre/:precio', verifyToken, getZapatosHombreByPrecio);
router.get('/calzado/mujer/:precio', verifyToken, getZapatosMujerByPrecio);
router.get('/calzado/nin/:precio', verifyToken, getZapatosNinoByPrecio);
router.get('/articulosvarios/:precio', verifyToken, getArticulosVariosByPrecio);
router.get('/ropa/invierno/:precio', verifyToken, getRopaInviernoByPrecio);
router.get('/ropa/verano/:precio', verifyToken, getRopaVeranoByPrecio);
router.get('/ropa/eventos/:precio', verifyToken, getRopaEventosByPrecio);
router.get('/ropa/deportiva/:precio', verifyToken, getRopaDeportivaByPrecio);

export default router;