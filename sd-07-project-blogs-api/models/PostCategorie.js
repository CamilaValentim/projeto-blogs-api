const definePostCategorieModel = (sequelize, _DataTypes) => {
    const PostCategorie = sequelize.define('PostsCategories', {}, { timestamps: false });

    PostCategorie.associate = (models) => {
        models.BlogPost.belongsToMany(models.Categorie, {
             as: 'categories', 
             through: PostCategorie,
             foreignKey: 'postId',
             otherKey: 'categoryId',
             });
        models.Categorie.belongsToMany(models.BlogPost, {
            as: 'BlogPosts', 
            through: PostCategorie,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };
    return PostCategorie;
};

module.exports = definePostCategorieModel;