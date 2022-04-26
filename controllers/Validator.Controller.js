const { Validator } = require("node-input-validator");

const niv = require("node-input-validator");
/**
 * @param {Object} messages
 * @param {string?=en} language
 */
niv.extendMessages({
        required: "merci de saisir un(e) :attribute",
        string: "merci de saisir du texte dans le champ :attribute",
        minLength: "Le minimun de charactere n'est pas atteint :attribute",
        hexColor: "Merci de choisir un code couleur correct",
        contains: "Merci de saisir un contenu correct",
        mongoId: "Merci de saisir un Id valid",
    },
    "en"
);

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (label, color, definition) and validate data
 * @req.body.label required|string|minLength:3
 * @req.body.color required|hexColor
 * @req.body.definition required|contains:mdi
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateLevel = (req, res, next) => {
    const v = new Validator(req.body, {
        label: "required|string|minLength:3",
        color: "required|hexColor",
        definition: "required|contains:mdi",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).json(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (_id) and validate data
 * @req.body._id "required|mongoId"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateBodyId = (req, res, next) => {
    const v = new Validator(req.body, {
        _id: "required|mongoId",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (id) and validate data
 * @req.body.id "required|mongoId"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateBodyID = (req, res, next) => {
    const v = new Validator(req.body, {
        id: "required|mongoId",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.params (id) and validate data
 * @req.params.id "required|mongoId"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateParamsId = (req, res, next) => {
    const v = new Validator(req.params, {
        id: "required|mongoId",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (firstName, lastName, email) and validate data
 * @req.body.firstName "required|string|minLength:3"
 * @req.body.lastName "required|string|minLength:3"
 * @req.body.email "required|email"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateUser = (req, res, next) => {
    const v = new Validator(req.body, {
        firstName: "required|string|minLength:3",
        lastName: "required|string|minLength:3",
        email: "required|email",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (admin) and validate data
 * @req.body.admin "required|boolean"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateBodyAdmin = (req, res, next) => {
    const v = new Validator(req.body, {
        admin: "required|boolean",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (title, level, users) and validate data
 * @req.body.title "required|string|minLength:3"
 * @req.body.level "required|string|mongoId"
 * @req.body.users "required|array"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateTask = (req, res, next) => {
    const v = new Validator(req.body, {
        title: "required|string|minLength:3",
        level: "required|string|mongoId",
        users: "required|array",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (addFolder, folder) and validate data
 * @req.body.addFolder "required|boolean"
 * if addFolder = true check :
 * @req.body.folder "required|string|minLength:3"
 * else
 * @req.body.folder "required|mongoId"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateTaskFolder = (req, res, next) => {
    const v = new Validator(req.body, {
        addFolder: "required|boolean",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        if (req.body.addFolder) {
            const validate = new Validator(req.body, {
                folder: "required|string|minLength:3",
            });
            validate.check().then((matched) => {
                if (!matched) {
                    return res.status(422).send(valid.errors);
                }
                next();
            });
        } else {
            const valid = new Validator(req.body, {
                folder: "required|mongoId",
            });
            valid.check().then((matched) => {
                if (!matched) {
                    return res.status(422).send(valid.errors);
                }
                next();
            });
        }
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (label) and validate data
 * @req.body.label  "required|string|minLength:3"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateFolder = (req, res, next) => {
    const v = new Validator(req.body, {
        label: "required|string|minLength:3",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (password) and validate data
 * @req.body.password  "required|string|minLength:8"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validatePassword = (req, res, next) => {
    const v = new Validator(req.body, {
        password: "required|string|minLength:8",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};

/**
 * @param {req} body
 * @param {res} response
 * @param {next} next
 * check req.body (password, email) and validate data
 * @req.body.email  "required|email"
 * @req.body.password  "required|string|minLength:8"
 * if error
 * @return {response.status(422).json(v.errors)}
 * or if all it's ok
 * @next
 */
module.exports.validateLogin = (req, res, next) => {
    const v = new Validator(req.body, {
        email: "required|email",
        password: "required|string|minLength:8",
    });

    v.check().then((matched) => {
        if (!matched) {
            return res.status(422).send(v.errors);
        }
        next();
    });
};