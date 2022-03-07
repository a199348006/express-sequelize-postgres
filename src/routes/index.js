const express = require('express');
const store = require('../controllers/store.controller');
const menu = require('../controllers/menu.controller');
const router = express.Router();

router.post('/store', store.postStoreData);
router.post('/menu', menu.postMenu);

module.exports = router;