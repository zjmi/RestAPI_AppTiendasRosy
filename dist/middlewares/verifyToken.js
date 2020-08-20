"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = verifyToken;

var jwt = require('jsonwebtoken');

var config = require('../config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No token provider'
    });
  }

  jwt.verify(token, config.secret, function (error, decoded) {
    if (error) {
      return res.status(401).json({
        "error": true,
        "message": 'Unauthorized access.'
      });
    }

    req.userId = decoded.id;
    next();
  });
}