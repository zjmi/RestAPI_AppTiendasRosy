import { Router } from 'express';
const router = Router();

import { signup, login, profile, setProfile, setSecurity, setLocation, getSecurity, getProfile, getLocation, setVerificada, resendEmail, verifyEmail, changePassword, resendEmailPass, clearCodigoSeguridad, getCoordinates, setCoordinates } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/verifyToken';

router.post('/signup', signup)

router.post('/login', login)

router.post('/verifyEmail', setVerificada)

router.post('/resendEmail', resendEmail)

router.post('/checkEmail', verifyEmail)

router.post('/resendClave', resendEmailPass)

router.post('/changePass', changePassword)

router.post('/setprofile', verifyToken, setProfile)

router.post('/getprofile', verifyToken, getProfile)

router.post('/setsecurity', verifyToken, setSecurity)

router.post('/getsecurity/', verifyToken, getSecurity)

router.post('/setlocation', verifyToken, setLocation)

router.post('/getlocation', verifyToken, getLocation)

router.post('/profile', verifyToken, profile)

router.post('/setcoordinates', verifyToken, setCoordinates)

router.post('/getcoordinates', verifyToken, getCoordinates)

export default router;