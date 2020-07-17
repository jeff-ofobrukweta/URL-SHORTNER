import redis from "../config/redis";


// ioredis supports all Redis commands:
export const setOption = async (key: string, value: any)=> {
      await redis.set(key, value); // returns promise which resolves to string, "OK"
}

// ioredis supports all Redis commands:
export const getOption = async (key: string): Promise<any>=> {
    // the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING)
    // the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" `

    // ioredis supports the node.js callback style
     await redis.get(key, (err: any, result: any): void => {
        if (err) {
            console.error(err);
        } else {
            console.log(result); // Promise resolves to "bar"
        }
    });
}
