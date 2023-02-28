import {categoriesFormation} from '../../../../data/categoriesFormation'

export default function handler(req, res){
    const {categorieSlug} = req.query;
    const myCategorie = categoriesFormation.find(categorie => categorie.slug ===  categorieSlug);
    res.status(200).json(myCategorie);
}