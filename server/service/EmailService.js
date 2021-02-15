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

exports.sendVerificationCode = function sendVerificationCode(email, verificationCode) {
    var mailOptions = {
        from: 'bolsternetwork.org@gmail.com',
        to: email,
        subject: 'Email Verification From Bolster Network',
        html: `<h1>Welcome to the Bolster Network!</h1><br/><p><b>${verificationCode}</b> is your verification code</p>`
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

exports.sendResetPasswordCode = function sendResetPasswordCode(email, uuid) {
  var mailOptions = {
      from: 'bolsternetwork.org@gmail.com',
      to: email,
      subject: 'Password Reset From Bolster Network',
      html: `<h1>Here is your link to reset your password:</h1><br/>

      <p><b>http://localhost:3000/resetPassword?uuid=${uuid}</b></p>`
    };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
