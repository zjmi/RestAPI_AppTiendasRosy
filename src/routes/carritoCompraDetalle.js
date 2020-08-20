import { Router } from 'express';
const router = Router();

import { addItemDetalleCarritoCompra, getItemsDetalleCarritoCompra, removeItemDetalleCarritoCompra } from '../controllers/carritoCompraDetalle.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/add', verifyToken, addItemDetalleCarritoCompra);

router.post('/remove', verifyToken, removeItemDetalleCarritoCompra);

router.post('/get', verifyToken, getItemsDetalleCarritoCompra);

export default router;