const Article = require('../models/Article');

exports.addArticle = (req, res) => {
    const data = req.data;
    
    if (!data) console.log('have no data')
    console.log(data);
    Article.create(data)
}