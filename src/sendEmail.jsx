const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vitor05kubica12@gmail.com', // Seu endereço de e-mail
    pass: 'fafe020301' // Sua senha de e-mail
  }
});

const handleClick = (ref) => {
    if (ref == 'ref1'){
      ref1.current?.scrollIntoView({ behavior: 'smooth' });
    } if (ref == 'ref2') {
      ref2.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
};

const sendEmail = async (nome, email, mensagem) => {
  try {
    // Configurações do e-mail
    const mailOptions = {
      from: 'vitor05kubica12@gmail.com', // Seu endereço de e-mail
      to: 'vitor05kubica12@gmail.com', // Endereço de e-mail de destino
      subject: 'Novo contato pelo formulário do site',
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
};

module.exports = sendEmail;
