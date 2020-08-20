import { Router } from 'express';
const router = Router();

import { getCategoriaProductosEconomico,
        getInventarioEtiquetaMayoreoEconomico, 
        getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto,
        getCategoriaProductosRegular,
        getInventarioEtiquetaMayoreoRegular,
        getInventarioEtiquetaMayoreoRegularByCategoriaProducto, 
        getCategoriaProductosPremiun,
        getInventarioEtiquetaMayoreoPremiun, 
        getInventarioEtiquetaMayoreoPremiunByCategoriaProducto,
        getCategoriaProductosPlatinum,
        getInventarioEtiquetaMayoreoPlatinum,
        getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto, 
        getSearchMayoreo} 
from '../controllers/inventarioEtiquetaProductoMayoreo.controller';

import { verifyToken } from '../middlewares/verifyToken';

//Ruta para buscar en el inventario de Rosy Online
router.get('/buscar/:filtro', getSearchMayoreo);

//Rutas Mayoreo Economico
router.get('/categoriaproductos/economico',verifyToken, getCategoriaProductosEconomico);
router.get('/economico/all', verifyToken, getInventarioEtiquetaMayoreoEconomico);
router.get('/economico/:CategoriaProducto',verifyToken, getInventarioEtiquetaMayoreoEconomicoByCategoriaProducto);

//Rutas Mayoreo Regular
router.get('/categoriaproductos/regular',verifyToken, getCategoriaProductosRegular);
router.get('/regular/all', verifyToken, getInventarioEtiquetaMayoreoRegular);
router.get('/regular/:CategoriaProducto',verifyToken, getInventarioEtiquetaMayoreoRegularByCategoriaProducto);

//Rutas Mayoreo Premiun
router.get('/categoriaproductos/premiun',verifyToken, getCategoriaProductosPremiun);
router.get('/premiun/all', verifyToken, getInventarioEtiquetaMayoreoPremiun);
router.get('/premiun/:CategoriaProducto',verifyToken, getInventarioEtiquetaMayoreoPremiunByCategoriaProducto);

//Rutas Mayoreo Platinum
router.get('/categoriaproductos/platinum',verifyToken, getCategoriaProductosPlatinum);
router.get('/platinum/all', verifyToken, getInventarioEtiquetaMayoreoPlatinum);
router.get('/platinum/:CategoriaProducto',verifyToken, getInventarioEtiquetaMayoreoPlatinumByCategoriaProducto);

export default router;