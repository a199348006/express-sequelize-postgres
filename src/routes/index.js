const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const order = require('../controllers/order.controller');
const buyer = require('../controllers/buyer.controller');
const router = express.Router();

router.post('/store', store.create);
router.post('/menu', menu.create);
router.post('/order', order.create);
router.post('/buyer', buyer.create);

module.exports = router;