const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const order = require('../controllers/order.controller');
const buyer = require('../controllers/buyer.controller');
const router = express.Router();

router.post('/stores', store.create);
router.get('/stores', store.findAll);
router.get('/stores/:id', store.findByPk);
router.delete('/stores/:id', store.destroy);
router.post('/menus', menu.create);
router.post('/orders', order.create);
router.post('/buyers', buyer.create);

module.exports = router;