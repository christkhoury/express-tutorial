var express = require('express');
var router = express.Router();
var  controller = require('../controllers/products.controller')

router.get('/', controller.getAll)
router.get('/:id', controller.productsbyid)
// router.get('/:id', controller.usersById)

module.exports = router;
