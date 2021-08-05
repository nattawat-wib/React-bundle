const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.route('/')
    .post(articleController.addArticle)
    .get(articleController.getAllArticle)

router.route('/:title')
    .delete(articleController.deleteArticle)
    .get(articleController.getArticle)
    .patch(articleController.editArticle);

module.exports = router;