const { validationResult } = require('express-validator');
const message = require('../helpers/message.json');
const { User } = require('../models');

const existUser = async (req, res, next) => {      
    const { email } = req.body;
    const errorsMsg = validationResult(req);
console.log('error no user', errorsMsg);

    if (!errorsMsg.isEmpty()) {
        const { msg } = errorsMsg.array()[0];
        return res.status(400).json({ message: msg });
    }
        
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ message: message.existuser });
    
  next();
};
module.exports = existUser;