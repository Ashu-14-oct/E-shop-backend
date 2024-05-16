import * as redis from "redis";

const redisClient = redis.createClient();

redisClient.connect().then(async () => {
  console.log("connected to redis");
});

export default redisClient;
