const nodemailer = require('nodemailer')

module.exports =  (emailContent, email, ref) => {

       let transporter = nodemailer.createTransport({
           host: "mail.it-dev.ar",
           port : 465,
           secure: true,
           auth: {
               user: "comercial@it-dev.ar",
               pass: "Rhel2020"
           },
           tls : {
               rejectUnauthorized : false
           }            
       });       

       let mailOptions = {
           from:  "contacto",
           to: email,
           subject: ref,
           html: emailContent
       }           
       
       transporter.sendMail(mailOptions, (error, info)=>{
           if(error){
               console.log('no se pudo enviar el email ' + error)
           }
           else{
               console.log('Email enviado con exito' + info.message)
               response.status(200).send(200)
           }
       })     

    }