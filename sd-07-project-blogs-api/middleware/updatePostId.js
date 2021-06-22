const jwt = require('jsonwebtoken');
const message = require('../helpers/message.json');
const { BlogPost, User } = require('../models');

const secret = 'mysecrett';

const updatePostId = async (req, res, next) => {      
  // id do post
    const { id } = req.params;
    const post = await BlogPost.findByPk(id);
    console.log('post:', post);
    if (!post) return res.status(404).json({ message: message.blogPostNotexist });

    const { userId } = post.dataValues;
    console.log('do post:', userId);

    const token = req.headers.authorization; 
    const decode = jwt.verify(token, secret);
    const { email } = decode;
    const user = await User.findOne({ where: { email } });
    console.log('user aqui:', user);
    const idUser = user.dataValues.id;
    console.log('userId', idUser);

    if (idUser !== userId) return res.status(401).json({ message: message.updateUserCategory });
    
  next();
};
module.exports = updatePostId;