import { Router } from 'express';
const router = Router();

import { getClases } from '../controllers/clase.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/', verifyToken, getClases);

export default router;