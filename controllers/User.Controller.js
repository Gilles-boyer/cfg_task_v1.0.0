const { faker } = require("@faker-js/faker");
const User = require("../models/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();
const SecretKey = process.env.TOKEN_SECRET;
const Transporter = require("./Email.Controler");
const { revoke } = require("../service/auth");

module.exports.index = (req, res) => {
    User.find({ archived: false })
        .select(["id", "lastName"])
        .then((user) => res.status(200).json(user))
        .catch((err) => console.error(err));
};

module.exports.listUser = (req, res) => {
    User.find({ archived: false })
        .select(["id", "lastName", "firstName", "admin", "email"])
        .then((user) => res.status(200).json(user))
        .catch((err) => console.error(err));
};

module.exports.store = async(req, res) => {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(faker.name.firstName(), 10),
    });

    user.save((err, use) => {
        if (err) return res.status(500).send(err);
        var data = {
            _id: use._id,
            email: use.email,
            firstName: use.firstName,
            lastName: use.lastName,
            admin: false,
        };
        return res.status(200).json(data);
    });
};

module.exports.update = (req, res) => {
    User.findById(req.body._id)
        .then((user) => {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.admin = req.body.admin;
            user.save((err, use) => {
                if (err) return res.status(500).send(err);
                var newUser = {
                    _id: use._id,
                    lastName: use.lastName,
                    firstName: use.firstName,
                    email: use.email,
                    admin: use.admin,
                };
                return res.status(200).json(newUser);
            });
        })
        .catch((err) => res.status(500).send(err));
};

module.exports.delete = async(req, res) => {
    User.updateOne({ _id: req.params.id }, {
            archived: true,
            password: await bcrypt.hash(faker.name.firstName(), 10),
        },
        (err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json({
                delete: true,
                message: "l'utilisateur a été supprimé",
            });
        }
    );
};

module.exports.userResetPassword = async(req, res, next) => {
    User.updateOne({ _id: req.userAuth._id }, {
            password: await bcrypt.hash(req.body.password, 10),
        },
        (err) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json({
                modify: true,
                message: "le mot de passe a été mis à jour",
            });
        }
    );
};

module.exports.resetPassword = async(req, res) => {
    var use = await User.findById(req.params.id).select([
        "_id",
        "lastName",
        "firstName",
        "email",
        "admin",
    ]);

    var token = await jwt.sign({
            user: use,
        },
        SecretKey, { expiresIn: "1h" }
    );

    Transporter.sendMail({
            to: use.email,
            subject: "Reset password",
            text: "Modification du mot de pass",
            html: htmlResetPassword(use, token),
        },
        function(error, info) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json("Email sent: " + info.response);
            }
        }
    );
};

module.exports.test = (req, res) => {
    req.userAuth.login = true;
    return res.status(200).json(req.userAuth);
};

htmlResetPassword = (use, token) => {
    var html;
    html += "<body>";
    html += `<p>Bonjour ${use.firstName} ${use.lastName}, </p>`;
    html += `<p>Un nouveau mot de passe a été demandé pour l'adresse : ${use.email}.
            Si vous souhaitez demander la modification du mot de pass, 
            merci de cliquer sur le lien ci-dessous :</p>`;
    html += `<p><a href="https://mytaskcfg.herokuapp.com/#/user/${token}/reset/password"> Reset Your Password </a></p>`;
    html += "</body>";

    return html;
};

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) return res.status(500).json(err);
                if (!result) {
                    return res.status(223).json({
                        error: true,
                        message: "Erreur password",
                    });
                } else {
                    var userToken = {
                        _id: user.id,
                        lastName: user.lastName,
                        firstName: user.firstName,
                        email: user.email,
                        admin: user.admin,
                    };

                    jwt.sign({ user: userToken },
                        SecretKey, { expiresIn: "24h" },
                        (errors, token) => {
                            if (errors) return res.status(500).json(errors);

                            return res.status(200).json({
                                login: true,
                                token: token,
                            });
                        }
                    );
                }
            });
        })
        .catch((error) => res.status(500).json(error));
};