import {v2 as cloudinary} from 'cloudinary';

import 'dotenv/config';
const config = process.env;

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key:config.CLOUD_KEY,
  api_secret:config.CLOUD_SECRET
})


export const uploadImage = async (filePath)=>{
 return await cloudinary.uploader.upload(filePath, {
    folder: 'postImages'
  })
}