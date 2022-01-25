var express = require('express');
var router = express.Router();
var  controller = require('../controllers/categories.controller')

router.get('/', controller.getAll)
router.get('/:id', controller.categoriesbyid)


module.exports = router;
