const { body } = require('express-validator');
const message = require('../helpers/message.json');

const loginValidator = [
    body('email')
        .exists({ checkFalsy: false })
        .withMessage(message.EmailObrigatorio)
        .notEmpty()
        .withMessage(message.emailwhite),
    body('password')
        .exists({ checkFalsy: false })
        .withMessage(message.passwordObrigatoria)
        .notEmpty()
        .withMessage(message.passwordWhite),
];

module.exports = loginValidator;