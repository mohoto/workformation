import {articles} from '../../../../data/articles'

export default function handler(req, res) {
    const {articleSlug} = req.query
    const article = articles.find(article => article.slug === articleSlug);
    res.status(200).json(article)
}