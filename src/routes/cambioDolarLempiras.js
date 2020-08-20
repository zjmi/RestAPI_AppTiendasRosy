import { Router } from 'express';
const router = Router();

import { getCambioDolarLempira } from '../controllers/cambioDolarLempira.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/', verifyToken, getCambioDolarLempira);

export default router;