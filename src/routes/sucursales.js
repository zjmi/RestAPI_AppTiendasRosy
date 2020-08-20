import { Router } from 'express';
const router = Router();

import { getSucursales } from '../controllers/sucursal.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/', verifyToken, getSucursales);

export default router;