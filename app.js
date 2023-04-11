const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
        user: 'herta.nitzsche73@ethereal.email',
        pass: 'WH2dhUFxQ6uXKmYEf7'
    },
  });
  let result = otpGenerator.generate(6, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
  
  let info = await transporter.sendMail({
    from: 'chauhan.alok0911@gmail.com', 
    to: "chauhan.alok1995@gmail.com", 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: `<h1>Hello world?</h1></br> <p> Here is the OTP ${result}`, 
  });

  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);



