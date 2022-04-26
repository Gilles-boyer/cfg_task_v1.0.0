const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();
const SecretKey = process.env.TOKEN_SECRET;

/**
 *@param req.headers.authorization (token)
 *@param res (give a response if catch error)
 *@param next (go to next method)
 *
 * Verify token and define User Auth
 */
module.exports.auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenVerify = jwt.verify(token, SecretKey);
        req.userAuth = tokenVerify.user;

        next();
    } catch (error) {
        return res.status(498).json(error);
    }
};