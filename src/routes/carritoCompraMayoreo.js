import { Router } from 'express';
const router = Router();

import { addItemMayoreoCarritoCompra, removeItemMayoreoCarritoCompra, getItemsMayoreoCarritoCompra } from '../controllers/carritoCompraMayoreo.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/add', verifyToken, addItemMayoreoCarritoCompra);

router.post('/remove', verifyToken, removeItemMayoreoCarritoCompra);

router.post('/get', verifyToken, getItemsMayoreoCarritoCompra);

export default router;