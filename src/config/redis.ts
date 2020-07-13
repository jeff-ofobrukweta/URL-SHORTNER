import Redis from "ioredis";

export const redis = new Redis({
    host:"localhost",
    port:6379,
    connectTimeout: 22000,
    maxRetriesPerRequest: 4,
    retryStrategy: (times:any) => Math.min(times * 30, 1000),
  }
);

export default redis;