import nodemailer from "nodemailer";

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.PASSMAIL, //gmail address
    pass: process.env.PASSKEY, //App password for Gmail Account
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.PASSMAIL, // sender gmail address
    to: ["deepanagarajan1208@gmail.com"], // list of receivers
    subject: "Send email using nodemailer and gmail", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  const sendMail = async () => {
    try {
      await transporter.sendMail();
      console.log("Email has been sent successfully");
    } catch (error) {
      console.error(error);
    }
  };
  sendMail(transporter, mailOptions);
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);