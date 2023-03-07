import sgMail from '@sendgrid/mail'

export default async function handler(req, res) {
    const {nom, email, phoneNumber, message} = req.body;
    console.log('nom:', nom)
    res.status(200).json("contact ok");
    
};





