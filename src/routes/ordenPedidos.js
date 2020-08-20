import { Router } from 'express';
const router = Router();

import { getPedidos, getItemsPedido, getOrderPay } from '../controllers/ordenPedido.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/', verifyToken, getPedidos);

router.post('/items', verifyToken, getItemsPedido);

router.post('/orderpay', verifyToken, getOrderPay);

export default router;