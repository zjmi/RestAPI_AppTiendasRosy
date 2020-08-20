import { Router } from 'express';
const router = Router();
import { getSearch } from '../controllers/search.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.get('/all/:filtro', verifyToken, getSearch);

export default router;