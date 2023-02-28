import {categoriesBlog} from '../../../../data/categoriesBlog'

export default function handler(req, res){
    const {categorieSlug} = req.query;
    const myCategorie = categoriesBlog.find(categorie => categorie.slug ===  categorieSlug);
    res.status(200).json(myCategorie);
}
