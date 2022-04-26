var nodemailer = require("nodemailer");
const { config } = require("dotenv");

config();

/**
 *Config for send mail with nodemailer
 */
module.exports = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});