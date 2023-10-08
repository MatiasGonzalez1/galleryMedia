import mongoose from 'mongoose';

export async function connectDB(){
  try{
  const db = await mongoose.connect(`mongodb+srv://mngepson2018:4Liva1NjnowjyOrP@cluster0.kbjxv3k.mongodb.net/`)
  console.log('DB is ready', db.connection.name)
}catch(error){
  console.error(error)
}
}
