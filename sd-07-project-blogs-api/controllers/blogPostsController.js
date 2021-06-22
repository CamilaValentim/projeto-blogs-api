const { BlogPost, User, Categorie } = require('../models');
const message = require('../helpers/message.json');

const getAll = async (req, res) => {
 const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categorie, as: 'categories', through: { attributes: [] } },
    ] });
 
    return res.status(200).json(posts);
};
const getById = async (req, res) => {
    const postsId = await BlogPost.findByPk(req.params.id, {  
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categorie, as: 'categories', through: { attributes: [] } },
        ] });
     if (!postsId) return res.status(404).json({ message: message.blogPostNotexist });
        
    return res.status(200).json(postsId);
};  

const blogPosts = async (req, res) => {
    const { emailUser } = res.locals;
    const user = await User.findOne({ where: { email: emailUser } });
    if (!user) return res.status(404).json({ message: 'Usuario não cadastrado' });
    const userId = user.id;
    const published = Date.now();
    const updated = Date.now();

    const { title, content } = req.body;  

    const post = await BlogPost.create({
         title, content, userId, published, updated,
         });

    // const objectPost = {
    //     id: post.id,
    //     userId, 
    //     title: post.title,
    //     content: post.content,     
    // };

    return res.status(201).json(post);  
};

const update = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    await BlogPost.update({ title, content }, { where: { id } });

    const posts = await BlogPost.findByPk(id, {
        include: [
            { model: Categorie, as: 'categories', through: { attributes: [] } },
    ] });
 
    return res.status(200).json(posts);
};

const deletePosts = async (req, res) => {
    const { id } = req.params;

    await BlogPost.destroy({ 
        where: { id },
    });
    res.status(204).end();
};

module.exports = {
    blogPosts,
    getAll,
    getById,
    update,
    deletePosts,
};
