import { Router } from 'express';
const router = Router();

import { getPictures, getPortadas, getPicturesItemsEtiqueta, getPicturesByReferencia } from '../controllers/picture.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/', verifyToken, getPictures);

router.post('/portadas', verifyToken, getPortadas);

router.post('/portadaItemsEtiqueta', verifyToken, getPicturesItemsEtiqueta);

router.post('/imagesItemReferencia', verifyToken, getPicturesByReferencia);

export default router;