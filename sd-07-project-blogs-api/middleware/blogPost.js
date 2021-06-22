const { validationResult } = require('express-validator');
const message = require('../helpers/message.json');
const searchCategory = require('../helpers/searchCategory');

const blogPost = async (req, res, next) => {     
  const errorsMsg = validationResult(req);
  console.log('erro aqui:', errorsMsg.array());

  if (!errorsMsg.isEmpty()) {
      const { msg } = errorsMsg.array()[0];
      return res.status(400).json({ message: msg });
  }

    const { categoryIds } = req.body;
    const searchcategoryId = await searchCategory(categoryIds);

    if (!searchcategoryId) {
      return res.status(400).json({ message: message.notCategoryIds });
    }

  next();
};

module.exports = blogPost;