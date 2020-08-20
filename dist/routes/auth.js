"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _verifyToken = require("../middlewares/verifyToken");

var router = (0, _express.Router)();
router.post('/signup', _auth.signup);
router.post('/login', _auth.login);
router.post('/verifyEmail', _auth.setVerificada);
router.post('/resendEmail', _auth.resendEmail);
router.post('/checkEmail', _auth.verifyEmail);
router.post('/resendClave', _auth.resendEmailPass);
router.post('/changePass', _auth.changePassword);
router.post('/setprofile', _verifyToken.verifyToken, _auth.setProfile);
router.post('/getprofile', _verifyToken.verifyToken, _auth.getProfile);
router.post('/setsecurity', _verifyToken.verifyToken, _auth.setSecurity);
router.post('/getsecurity/', _verifyToken.verifyToken, _auth.getSecurity);
router.post('/setlocation', _verifyToken.verifyToken, _auth.setLocation);
router.post('/getlocation', _verifyToken.verifyToken, _auth.getLocation);
router.post('/profile', _verifyToken.verifyToken, _auth.profile);
router.post('/setcoordinates', _verifyToken.verifyToken, _auth.setCoordinates);
router.post('/getcoordinates', _verifyToken.verifyToken, _auth.getCoordinates);
var _default = router;
exports["default"] = _default;