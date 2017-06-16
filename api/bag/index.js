'use strict';

var express = require('express');
var controller = require('./bag.controller');

var router = express.Router();

// Actual endpoint definition with link to the controller
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;
