var express = require('express');
var router = express.Router();
var  controller = require('../controllers/email.controller')

/* GET home page. */
router.get('/', controller.allUsers)
router.get('/:id', controller.usersById)

module.exports = router;
