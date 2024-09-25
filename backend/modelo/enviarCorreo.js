const nodemailer = require('nodemailer');

// Configura el transporte de Nodemailer para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Función para enviar el correo
const enviarCorreo = async (para, asunto, texto) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: para,
    subject: asunto,
    text: texto,
  };

  // Depuración: Verifica a quién se está enviando el correo
  console.log('Enviando correo a:', para);
  console.log('Asunto:', asunto);
  console.log('Texto del correo:', texto);

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

module.exports = enviarCorreo;
