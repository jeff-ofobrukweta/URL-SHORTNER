import RateLimit from 'express-rate-limit'

const env = process.env.NODE_ENV || 'dev'
const rateLimitRequest = Number(process.env.RATE_LIMIT_TIME) || 15
const rateLimitTime = Number(process.env.RATE_LIMIT_REQUEST) || 100

/*
The 429 status code indicates that the user has sent too many requests in a given amount of time ("rate limiting"). 
*/
export default () => {
    try {
        if (env === 'production') {
            return RateLimit({
                windowMs: rateLimitTime * 60 * 1000, // 15 minutes
                max: rateLimitRequest, // limit each IP to 30 requests per windowMs
                handler: (req, res, next) => {
                    res.json({
                        message: 'Rate limt exceeded, please try again later some time. (sent too many requests in a given amount of time ("rate limiting")).',
                        code: 429,
                    })
                    next()
                },
            })
        }
        return RateLimit({
            windowMs: 5 * 60 * 1000, // 5 minutes
            max: 3000, // limit each IP to 3000 requests per windowMs
            handler: (req, res, next) => {
                res.json({
                    message: 'Rate limt exceeded, please try again later some time. (sent too many requests in a given amount of time ("rate limiting")).',
                    code: 429,
                })
                next()
            },
            message: 'Rate limt exceeded, please try again later some time  (sent too many requests in a given amount of time ("rate limiting")).',
        })
    } catch (err) {
        throw new Error(err)
    }
}