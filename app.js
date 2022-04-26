var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const version = require("./controllers/Version.Controller");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Api CFG My Task V1.0",
        version: "1.0.0",
        description: "API de gestion dossier et de tache",
        license: {
            name: "Licensed Under MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "Gilles BOYER",
            url: "http://gilles-boyer.re",
        },
    },
    servers: [{
        url: "http://localhost:3000/api",
        description: "Serveur heroku de production",
    }, ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["./routes/api.js"],
};

const swaggerSpec = swaggerJSDoc(options);

var app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(version.index);

app.use(express.static("public/dist"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;