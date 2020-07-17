import { IConfig } from './middleware.config.td'


const rateLimitRequest = Number(process.env.RATE_LIMIT_TIME) || 15
const rateLimitTime = Number(process.env.RATE_LIMIT_REQUEST) || 100


/*
The 429 status code indicates that the user has sent too many requests in a given amount of time ("rate limiting"). 
*/
export const environment: IConfig = {
    windowMs: rateLimitTime * 60 * 1000, // 15 minutes
    max: rateLimitRequest, // limit each IP to 30 requests per windowMs
    message: 'Rate limt exceeded, please try again later some time  (sent too many requests in a given amount of time ("rate limiting")).',
    handler: (req: any, res: any, next: any) => {
        res.json({
            message: 'Rate limt exceeded, please try again later some time. (sent too many requests in a given amount of time ("rate limiting")).',
            code: 429,
        })
        next()
    },
}