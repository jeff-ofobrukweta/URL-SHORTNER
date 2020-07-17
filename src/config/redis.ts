import Redis from 'ioredis'



const port = 6379
const host='localhost'
const connectTimeout = 22000
const maxRetriesPerRequest = 4


const redis = new Redis({
    host:host,
    port:port,
    connectTimeout: connectTimeout,
    maxRetriesPerRequest: maxRetriesPerRequest,
    retryStrategy: (times:number) => Math.min(times * 30, 1000),
  }
)

export default redis