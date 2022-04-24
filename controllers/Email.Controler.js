var nodemailer = require("nodemailer");
const { config } = require("dotenv");

config();

module.exports = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

var mailChangePassword = {
    from: "admin CFG",
    subject: "Changement de mot de passe",
    text: "Modification de votre mot de pass",
};

// module.exports.resetPasswordUser = (req, res) => {
//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             res.status(200).json("Email sent: " + info.response);
//         }
//     });
// };