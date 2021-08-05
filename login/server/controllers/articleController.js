const Article = require('../models/Article');

exports.addArticle = (req, res) => {
    const data = req.body;
    console.log(req.body)
    if (!data) return console.log('have no data') 
    console.log(data);
    Article.create(data)
    // Article.create({title: 'test title', desc: 'test desc'})
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