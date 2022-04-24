const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();
const SecretKey = process.env.TOKEN_SECRET;

module.exports.auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenVerify = jwt.verify(token, SecretKey);
        req.userAuth = tokenVerify.user;

        next();
    } catch (error) {
        return res.status(500).json(error);
    }
};