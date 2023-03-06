import sgMail from '@sendgrid/mail'

export default function handler(req, res){
    const {nom, prenom, email, phoneNumber, formationCategorie} = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API);
    
    const sendGridMail = {
        to: "work.formation.contact@gmail.com",
        from: "work.formation75@gmail.com",
        subject: "Nouveau message du site web",
        templateId: "d-a2b3604a2dcc40d4bbbafa0f48614665",
        dynamic_template_data: {
            nom: nom,
            nom: prenom,
            email: email,
            telephone: phoneNumber,
            categorie: formationCategorie
        }
    };

    (async () => {
        try {
            await sgMail.send(sendGridMail);
            res.status(200).json({message: "DEMANDE_RAPPEL_ENVOYÉ"})
        } catch (error) {
            res.status(500).json({messsage: "ERREUR_DE_SENDRID"})
        }
    })();
}