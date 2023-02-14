import {financements} from '../../../../data/financements'

export default function handler(req, res){
    res.status(200).json(financements);
}