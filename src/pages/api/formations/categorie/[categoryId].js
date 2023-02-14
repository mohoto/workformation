import {formations} from '../../../../../data/formations'

export default function handler(req, res) {
    const {categoryId} = req.query;
    const myFormations = formations.filter(formation => formation.categorieId === categoryId);
    res.status(200).json(myFormations);

}