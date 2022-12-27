var express = require('express');
const indexFunctions = require('../controllers/indexController');
var router = express.Router();
let indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home) 

//Recibir contacto
//router.post('/contactanos', indexController.contact)
router.post('/contactanos', indexController.contact)

//Enviar newsletter
//router.post('/teContactamos', indexController.sendNewsletter)

module.exports = router;