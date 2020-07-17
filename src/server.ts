import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import UrlShortner from './controller/api/index.api.controller'
import rateLimitMiddleware from './middleware/rateLimit.middleware'

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use([logger('combined'),
        logger(':method :url :status :res[content-length] - :response-time ms'), logger((tokens, req, res) => {
            return [
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens.res(req, res, 'content-length'), '-',
                tokens['response-time'](req, res), 'ms',
            ].join(' ')
        })])

        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(rateLimitMiddleware()) //this is to help throtttling
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is can be read from an external js module dynamically but cos its just few end-points ill leave it this way*/
        const apiController: any = new UrlShortner()
        const router = express.Router()
        // placeholder route handler
        router.post('/', apiController.createOption())
        router.get('/fetch', apiController.readOption())
        // router.get('*')
        this.express.use('/api/v1', router)

    }

}

export default new App().express