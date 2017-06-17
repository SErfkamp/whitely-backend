'use strict';

var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

// 'api/oder/
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
