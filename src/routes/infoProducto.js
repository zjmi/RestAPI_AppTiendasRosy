import { Router } from 'express';
const router = Router();

import { getInfoProducto } from '../controllers/infoProducto.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/', verifyToken, getInfoProducto);

export default router;