import {financements} from '../../../../data/financements'

export default function handler(req, res) {
    const {financementSlug} = req.query;
    const financement = financements.find(financement => financement.slug === financementSlug);
    res.status(200).json(financement);
}
