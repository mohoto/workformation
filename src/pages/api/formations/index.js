import {formations} from '../../../../data/formations'

export default function handler(req, res) {
    const myFormations = formations.filter(formation => formation.statut === "publié")
    res.status(200).json(myFormations);
}