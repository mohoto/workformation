import {categoriesBlog} from '../../../../data/categoriesBlog'

export default function handler(req, res) {
    res.status(200).json(categoriesBlog);
}