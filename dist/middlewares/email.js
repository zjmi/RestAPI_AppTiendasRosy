"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;

var nodemailer = require('nodemailer');

function sendEmail(correoElectronico, codigo) {
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rosydevelopers@gmail.com',
      pass: 'r0sydev.'
    }
  }); // Definimos el email

  var mailOptions = {
    from: 'Remitente',
    to: correoElectronico,
    subject: 'Verificacion de Codigo',
    html: "<b>Tu codigo es: " + codigo + "</b>"
  }; // Enviamos el email

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
}

;