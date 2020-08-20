import { Router } from 'express';
const router = Router();

import { getRegiones } from '../controllers/region.controller';
import { verifyToken } from '../middlewares/verifyToken';

// /api/regiones/
router.get('/', verifyToken, getRegiones);

export default router;