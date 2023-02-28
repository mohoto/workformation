import {categoriesFormation} from '../../../../data/categoriesFormation'

export default function handler(req, res){
    res.status(200).json(categoriesFormation);
}