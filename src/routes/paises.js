import { Router } from 'express';
const router = Router();

import { getPaises } from '../controllers/pais.controller';
import { verifyToken } from '../middlewares/verifyToken';

// /api/paises/
router.get('/', verifyToken, getPaises);

export default router;