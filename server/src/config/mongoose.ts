import mongoose from "mongoose";
// console.log(process.env.MONGO_DB);

const mongoDB = mongoose.connect(process.env.MONGO_DB || '').then(() => console.log('connected to mongodb')
).catch((err) => console.log(err));

export default mongoDB;