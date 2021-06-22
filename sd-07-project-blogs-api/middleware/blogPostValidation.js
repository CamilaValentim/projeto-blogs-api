const message = require('../helpers/message.json');

const blogPostValidation = async (req, res, next) => {      
    const { title, content, categoryIds } = req.body;
    if (!title) return res.status(400).json({ message: message.titleObrigatorio });
    if (!content) return res.status(400).json({ message: message.contentObrigatorio });
    if (categoryIds) return res.status(400).json({ message: message.updateCategoy });

  next();
};
module.exports = blogPostValidation;