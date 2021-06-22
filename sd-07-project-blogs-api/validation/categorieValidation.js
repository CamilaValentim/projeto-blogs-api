const { body } = require('express-validator');
const message = require('../helpers/message.json');

const categorieValidator = [
    body('name')
    .exists({ checkFalsy: true })
    .withMessage(message.nameobrigatorio),
];

module.exports = categorieValidator;