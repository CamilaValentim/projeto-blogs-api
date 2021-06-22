const { Router } = require('express');
const categorieController = require('../controllers/categorieController');
const validator = require('../validation/categorieValidation');

const router = Router();
const { categories, verifyAuthorization } = require('../middleware');

router.post('/', validator, categories, verifyAuthorization, categorieController.cadastro);
router.get('/', verifyAuthorization, categorieController.getAll);
module.exports = router;
