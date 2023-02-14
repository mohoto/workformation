import {formations} from '../../../../data/formations'

export default function handler(req, res) {
    const {formationSlug} = req.query;
    const formation = formations.find(formation => formation.slug === formationSlug);
    res.status(200).json(formation);
} 