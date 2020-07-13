import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import UrlShortner from './controller/api/index.api.controller';
import { ApiController } from './controller/api/abstract.api.controller';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use([logger('combined'),logger(':method :url :status :res[content-length] - :response-time ms'),logger((tokens, req, res) => {
            return [
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens.res(req, res, 'content-length'), '-',
                tokens['response-time'](req, res), 'ms'
            ].join(' ')
        })]);

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        const apiController : ApiController = new UrlShortner();
        let router = express.Router();
        // placeholder route handler
        router.get('/', apiController.readOption());
        this.express.use('/', router);
    }

}

export default new App().express;