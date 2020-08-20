import { Router } from 'express';
import { getItemsCarritoCompra, getSubTotalCarritoCompra, removeItemCarritoCompra, clearCarritoCompra, getListCarritoCompra } from '../controllers/carritoCompra.controller';
import { verifyToken } from '../middlewares/verifyToken';
const router = Router();

router.post('/get', verifyToken, getItemsCarritoCompra);

router.post('/getlist', verifyToken, getListCarritoCompra);

router.post('/getsubtotal', verifyToken, getSubTotalCarritoCompra);

router.post('/remove', verifyToken, removeItemCarritoCompra);

router.post('/clear', verifyToken, clearCarritoCompra);

export default router;