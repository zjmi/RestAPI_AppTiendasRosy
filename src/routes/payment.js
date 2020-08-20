import { Router } from 'express';
const router = Router();

import { depositPayment, cardPayment, pixelPay, success, cancel } from '../controllers/payment.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/depositPayment', verifyToken, depositPayment);

router.post('/cardPayment', verifyToken, cardPayment);

router.post('/cardkey', verifyToken, pixelPay);

router.get('/success', success);

router.get('/cancel', cancel);

export default router;