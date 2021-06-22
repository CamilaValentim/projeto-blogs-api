const jwt = require('jsonwebtoken');
const validateToken = require('../helpers/validateToken');
const message = require('../helpers/message.json');

const secret = 'mysecrett';

const verifyAuthorization = (req, res, next) => {
    const token = req.headers.authorization; 
    
    if (!token) return res.status(401).json({ message: message.notToken });
  
    const payload = validateToken(token);
  
   if (!payload) return res.status(401).json({ message: message.tokenInvalido });
   const decode = jwt.verify(token, secret);
   req.User = payload;
   res.locals.emailUser = decode.email;

   next();
};

module.exports = verifyAuthorization;