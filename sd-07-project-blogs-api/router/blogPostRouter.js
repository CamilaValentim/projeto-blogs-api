const { Router } = require('express');
const blogPostsController = require('../controllers/blogPostsController');
const validator = require('../validation/blogPostValidation');

const router = Router();
const { 
    blogPost, 
    verifyAuthorization, 
    updatePostId, 
    blogPostValidation, 
    deleteUserPost } = require('../middleware');

router.post('/', 
    validator,
    blogPost, 
    verifyAuthorization, 
    blogPostsController.blogPosts);

router.get('/:id',
    verifyAuthorization, 
    blogPostsController.getById);

router.get('/', 
    verifyAuthorization,  
    blogPostsController.getAll);

router.put('/:id',
    verifyAuthorization,
    updatePostId,
    blogPostValidation,
    blogPostsController.update);

router.delete('/:id',
    verifyAuthorization, 
    deleteUserPost,
    blogPostsController.deletePosts);

module.exports = router;
