const Article = require('../models/Article');

exports.addArticle = async (req, res) => {
    const data = req.body;
    if (!data) return console.log('have no data');
    const isArticleExist = await Article.findOne({title: req.body.title});
    if(isArticleExist) return (res.json('ชื่อบทความซ้ำ'))
    Article.create(data);

    console.log('add all data to DB');
}

exports.getAllArticle = async (req, res) => {
    const allArticle = await Article.find()

    if (!allArticle) console.log('cannot find any article')
    res.json(allArticle)
}

exports.deleteArticle = async (req, res) => {
    const articleName = req.params.title;
    console.log(articleName)
    if (!articleName) return console.log("this article don't exist");

    await Article.findOneAndDelete({title: articleName})
}

exports.getArticle = async (req, res) => {
    const articleTitle = req.params.title;
    const data = await Article.findOne({title : articleTitle})
    res.json(data);
}

exports.editArticle = async (req, res) => {
    const editedArticleTitle = req.params.title;
    const editedArticleData = req.body;
    await Article.findOneAndUpdate({title: editedArticleTitle}, editedArticleData)
}