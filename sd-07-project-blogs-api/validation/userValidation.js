const { body } = require('express-validator');
const message = require('../helpers/message.json');

const userValidator = [
    body('displayName').isLength({ min: 8 }).withMessage(message.caracterName),
    body('email')
        .exists({ checkFalsy: true })
        .withMessage(message.EmailObrigatorio)
        .isEmail()
        .withMessage(message.valideEmail),
    body('password')
        .exists({ checkFalsy: true })
        .withMessage(message.passwordObrigatoria)
        .isLength({ min: 6 })
        .withMessage(message.caracterPassword),
];

module.exports = userValidator;