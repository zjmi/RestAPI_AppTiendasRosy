import { Router } from 'express';
const router = Router();

import { getTipoNivelProductos } from '../controllers/tipoNivelProducto.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/', verifyToken, getTipoNivelProductos);

export default router;