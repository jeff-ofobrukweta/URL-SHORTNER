import RateLimit from 'express-rate-limit'
import { environment } from './middleware.config'


const env = process.env.NODE_ENV || 'dev'

export default () => {
    try {
        if (env === 'production') {
            return RateLimit(environment)
        }
        return RateLimit(environment)
    } catch (err) {
        throw new Error(err)
    }
}