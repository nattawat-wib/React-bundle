const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.route('/')
    .post(articleController.addArticle)
    .get(articleController.getAllArticle)

router.route('/:title')
    .delete(articleController.deleteArticle)

module.exports = router;