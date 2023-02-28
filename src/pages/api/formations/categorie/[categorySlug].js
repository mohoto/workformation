import {formations} from '../../../../../data/formations'

export default function handler(req, res) {
    const {categorySlug} = req.query;
    const myFormations = formations.filter(formation => formation.categorieSlug === categorySlug);
    res.status(200).json(myFormations);

}