import mongoose from 'mongoose';

import 'dotenv/config';
const config = process.env;

export async function connectDB(){
  try{
  const db = await mongoose.connect(`mongodb+srv://${config.MONGODB_NAME}:${config.MONGODB_PASS}@${config.MONGODB_CLUSTER}.kbjxv3k.mongodb.net/`)
  console.log('DB is ready', db.connection.name)
}catch(error){
  console.error(error)
}
}
