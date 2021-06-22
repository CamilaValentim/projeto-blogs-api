const { validationResult } = require('express-validator');
// const message = require('../helpers/message.json');

const categories = async (req, res, next) => {      
    const errorsMsg = validationResult(req);
    console.log('erro aqui categoria:', errorsMsg);
    if (!errorsMsg.isEmpty()) {
        const { msg } = errorsMsg.array()[0];
        return res.status(400).json({ message: msg });
    }

  next();
};
module.exports = categories;