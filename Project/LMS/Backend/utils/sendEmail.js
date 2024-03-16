import nodemailer from "nodemailer";

const sendEmail = async function (email, subject, message) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, //true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        },
    })
    // send main with defined transport object
    await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL, //sender address
        to: email, //user email
        sender: subject, //subject line
        html: message //html body
    })
}
export default sendEmail