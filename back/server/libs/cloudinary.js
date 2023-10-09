import {v2 as cloudinary} from 'cloudinary';

import 'dotenv/config';
const config = process.env;

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key:config.CLOUD_KEY,
  api_secret:config.CLOUD_SECRET
})

//funcion para subir las imágenes a la plataforma
export const uploadImage = async (filePath)=>{
 return await cloudinary.uploader.upload(filePath, {
    folder: 'postImages'
  })
}

//funcion que elimina las imagenes de la plataforma
export const deleteImage = async (id)=>{
  return await cloudinary.uploader.destroy(id)
}