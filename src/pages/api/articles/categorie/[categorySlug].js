import {articles} from '../../../../../data/articles'

export default function handler(req, res) {
    const {categorySlug} = req.query;
    const myArticles = articles.filter(article => article.categorieSlug === categorySlug);
    res.status(200).json(myArticles);

}

