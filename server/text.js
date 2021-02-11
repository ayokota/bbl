var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
       user: process.env.EMAIL_ADDR,
       pass: process.env.EMAIL_PASS
    }
  
});

var mailOptions = {
  from: 'bolsternetwork.org@gmail.com',
  to: 'akiyo.yokota@gmail.com',
  subject: 'do not reply',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
