const jwt = require('jsonwebtoken');
const config = require('../config');

export function verifyToken (req, res, next) {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth: false,
            message: 'No token provider'
        });
    }
    
    jwt.verify(token, config.secret, function (error, decoded) {
        if(error) {
            return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
        }
        req.userId = decoded.id;
        next();
    });
     
}