import Redis from 'ioredis'



const port:number = 6379
const host:string='localhost'
const connectTimeout:number = 22000
const maxRetriesPerRequest:number = 4


const redis = new Redis({
    host:host,
    port:port,
    connectTimeout: connectTimeout,
    maxRetriesPerRequest: maxRetriesPerRequest,
    retryStrategy: (times:number):number => Math.min(times * 30, 1000),
  }
)

export default redis