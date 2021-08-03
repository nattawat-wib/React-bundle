const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/', articleController.addArticle);
router.get('/', articleController.getAllArticle);

module.exports = router;