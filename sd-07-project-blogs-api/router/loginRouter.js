const { Router } = require('express');
const loginController = require('../controllers/loginController');
const validator = require('../validation/loginValidation');
const { existUser } = require('../middleware');

const router = Router();

router.post('/', validator, existUser, loginController.login);

module.exports = router;