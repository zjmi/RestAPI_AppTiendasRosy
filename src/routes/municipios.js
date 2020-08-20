import { Router } from 'express';
const router = Router();

import { getMunicipios } from '../controllers/municipio.controller';
import { verifyToken } from '../middlewares/verifyToken';

// /api/departamentos/
router.post('/', verifyToken, getMunicipios);

export default router;