const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const order = require('../controllers/order.controller');
const buyer = require('../controllers/buyer.controller');
const router = express.Router();

router.post('/store', store.postStoreData);
router.post('/menu', menu.postMenu);
router.post('/order', order.postOrder);
router.post('/buyer', buyer.postBuyer);

module.exports = router;