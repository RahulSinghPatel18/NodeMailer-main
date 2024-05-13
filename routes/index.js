var express = require('express');
var router = express.Router();
const sendmailcontroller=require("../controller/sendEmail.js")

/* GET home page. */
router.get('/', function(req, res, next) {// req ishe  controller khteh
  res.render('index', { title: 'Express' });
});
router.post('/sendemail',sendmailcontroller.sendemail)


module.exports = router;
