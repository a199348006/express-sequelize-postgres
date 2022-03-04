const express = require('express');
const store = require('../controllers/store.controller');
const router = express.Router();

router.post('/store', store.postStoreData);

module.exports = router;