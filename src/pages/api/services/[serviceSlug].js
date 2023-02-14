import {services} from '../../../../data/services';

export default function handler(req, res) {
    const {serviceSlug} = req.query;
    const service = services.find(service => service.slug === serviceSlug);
    res.status(200).json(service)
}
