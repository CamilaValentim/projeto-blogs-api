const verifyAuthorization = require('./verifyAuthorization');
const existEmail = require('./existEmail');
const existUser = require('./existUser');
const categories = require('./categories');
const blogPost = require('./blogPost');
const updatePostId = require('./updatePostId');
const blogPostValidation = require('./blogPostValidation');
const deleteUserPost = require('./deleteUserPost');

module.exports = {
    verifyAuthorization,
    existEmail,
    existUser,
    categories,
    blogPost,
    updatePostId,
    blogPostValidation,
    deleteUserPost,
};