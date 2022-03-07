const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const order = require('../controllers/order.controller');
const router = express.Router();

router.post('/store', store.postStoreData);
router.post('/menu', menu.postMenu);
router.post('/order', order.postOrder);

module.exports = router;