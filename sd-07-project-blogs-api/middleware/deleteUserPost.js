const message = require('../helpers/message.json');
const { BlogPost, User } = require('../models');

const deleteUserPost = async (req, res, next) => {      
  // id do post
    const { id } = req.params;
    const post = await BlogPost.findByPk(id);

    if (!post) return res.status(404).json({ message: message.blogPostNotexist });

    const { userId } = post.dataValues;
    // token vindo como email 
    const { emailUser } = res.locals;

    const user = await User.findOne({ where: { email: emailUser } });

    const idUser = user.dataValues.id;
   
    if (idUser !== userId) return res.status(401).json({ message: message.updateUserCategory });
    
  next();
};
module.exports = deleteUserPost;