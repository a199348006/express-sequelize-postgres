const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const order = require('../controllers/order.controller');
const buyer = require('../controllers/buyer.controller');
const router = express.Router();
// store
router.post('/stores', store.create);
router.get('/stores', store.findAll);
router.get('/stores/:id', store.findByPk);
router.patch('/stores/:id', store.update);
router.delete('/stores/:id', store.destroy);
// menu
router.post('/menus', menu.create);
router.get('/menus/:store_id', menu.findAll);
router.patch('/menus/:menu_id', menu.update);
router.delete('/menus/:menu_id', menu.destroy);
// order
router.post('/orders', order.create);
router.get('/orders', order.findAll);
router.get('/orders/:id', order.findByPk);
router.patch('/orders/:id', order.update);
router.delete('/orders/:id', order.destroy);
// buyer
router.post('/buyers', buyer.create);
router.get('/buyers/:order_id', buyer.findAll);
router.patch('/buyers/:buyer_id', buyer.update);
router.delete('/buyers/:buyer_id', buyer.destroy);

module.exports = router;