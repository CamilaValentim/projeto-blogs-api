const { body } = require('express-validator');
const message = require('../helpers/message.json');

const blogPostValidation = [  
        body('title')
          .exists({ checkFalsy: false })
          .withMessage(message.titleObrigatorio), 
        body('content')
          .exists({ checkFalsy: false })
          .withMessage(message.contentObrigatorio),
        body('categoryIds')
        .exists({ checkFalsy: false })
        .withMessage(message.categoryIdObrigatorio),  
      ];
      
module.exports = blogPostValidation;