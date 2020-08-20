import { Router } from 'express';
const router = Router();

import { getTipoNivelProductosClases } from '../controllers/tipoNivelProductoClase.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/', verifyToken, getTipoNivelProductosClases);

export default router;