import { Router } from 'express';
const router = Router();

import { getDepartamentos } from '../controllers/departamento.controller';
import { verifyToken } from '../middlewares/verifyToken';

// /api/departamentos/
router.get('/', verifyToken, getDepartamentos);

export default router;