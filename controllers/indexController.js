let nodemailer = require('../general-functions/nodemailer')

let indexFunctions = {
    home : (req, res, next)=>{
        res.render('index');
    },
    
    contact : (req, res, next) => {    
                 
        let emailContent = `
        <ul>
        <li>Nombre : ${req.body.nombre}</li>
        <li>Email del sujeto : <strong> ${req.body.email}</strong>
        </ul>
        <p>Mensaje : ${req.body.mensaje}</p>
        `
        nodemailer(emailContent, "comercial@it-dev.ar", req.body.asunto)
        res.redirect('/')        
    },       
    
    sendNewsletter : (req, res, next)=>{

        let emailContent =  "<p> Gracias por suscribirte a nuestra fundación </p>"
        nodemailer(emailContent, req.body.email, 'Hola, nos contactamos desde la Fundación Ramseyer')
        res.redirect('/')
    }     
}

module.exports = indexFunctions