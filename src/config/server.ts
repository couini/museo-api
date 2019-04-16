import express = require("express");
import mongoose = require("mongoose");
import bodyParser = require("body-parser");
import compression = require("compression");
import logger = require("morgan");
import helmet = require("helmet");
import cors = require("cors");

// Require dotenv
require('dotenv').config();

class Server {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/museo';

    constructor() {
        this.app = express();

        this.app.use(cors());

        this.mongoSetup();
        this.config();
        this.models();
        this.routes();
    }

    public models() { }

    public config() {

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json({limit:'5mb', type:'application/json'}));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader("Access-Control-Allow-Origin", "*");

            // Request methods you wish to allow
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

            // Request headers you wish to allow
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            // Pass to next layer of middleware
            next();
        });
    }

    public routes(): void {
        let router: express.Router;
        router = express.Router();

        router.get('/api', (req, res, next) => {
            res.json({
                message: 'Welcome to Museo !'
            });
        });

        this.app.use('/', router);
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'Connection error : '));
        db.once('open', function () {
            console.log('Connection ok!');
        });
    }
}

export default new Server().app;