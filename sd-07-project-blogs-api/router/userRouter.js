const { Router } = require('express');
const usersController = require('../controllers/usersController');
const validator = require('../validation/userValidation');

const router = Router();
const { verifyAuthorization, existEmail } = require('../middleware');

router.post('/', validator, existEmail, usersController.create);

router.get('/', verifyAuthorization, usersController.getAll);

router.get('/:id', verifyAuthorization, usersController.getById);

router.delete('/me', verifyAuthorization, usersController.deleteUser);

module.exports = router;
