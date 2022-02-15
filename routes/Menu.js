var express = require('express');
var router = express.Router();
var controller = require('../controllers/Menu.controller');
router.get('/', controller.getthem)
    //router.get('/:id', controller.menubyid)
 module.exports = router ;