import sgMail from '@sendgrid/mail'

export default async function handler(req, res) {
    const {nom, email, phoneNumber, message} = req.body;
   
    // Syntaxe adresse email
    /* const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
        res.status(400).send({message: "EMAIL_SYNTAX_INCORRECT"});
        return;
    }; */
    // Transformer les retours à la ligne pour le HTML
	/* const content = message.replace(/\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\t/g, "<br>")
        .replace(/<(?!br\s*\/?)[^>]+>/g, "");  */
        // supprime tout le html en autorisant uniquement les balises <br>

    sgMail.setApiKey(process.env.SENDGRID_API);

    //Création du message
    const sendGridMail = {
        to: "work.formation.contact@gmail.com",
        from: "work.formation75@gmail.com",
        subject: "Nouveau message du site web",
        templateId: "d-fb48b6f7d03d41f5852a16f850479d40",
        //text: message,
        //html: message.replace(/\r\n/g, '<br>'),
        dynamic_template_data: {
            nom: nom.toUpperCase(),
            email: email,
            telephone: phoneNumber,
            message: message
        }
    };

    (async () => {
        try {
            await sgMail.send(sendGridMail);
            res.status(200).json({message: "EMAIL_ENVOYÉ"})
        } catch (error) {
            res.status(500).json({messsage: "ERREUR_DE_SENDRID"})
        }
    })();
};





