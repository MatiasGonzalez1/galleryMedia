import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import Post from "../models/Post.js";
import fs from 'fs-extra'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts || posts.length < 1) {
      return res.status(404).json("Posts not found");
    }
    res.send({ count: posts.length, data: posts });
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    let image;

    //si existe la imagen se procesa para guardarla
    if(req.files.image){
      const result = await uploadImage(req.files.image.tempFilePath)
      
      //se eliminan las imagenes temporales del servidor
      await fs.remove(req.files.image.tempFilePath)
      image = {
        url: result.secure_url,
        public_id: result.public_id
    }
  }
  
  //creacion de un nuevo post en base a los datos enviados por el usuario y su respectiva imagen si es que tiene alguno as
    const newPost = new Post({
      title,
      description,
      image
    });
   
    await newPost.save();
   
    res.status(200).json(newPost);
  } catch (err) {
    return res.status(500).json({message: err.message})
    }
};


export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const editPost = await Post.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(201).json(editPost);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await Post.findByIdAndDelete(id);

    if (!deletePost) return res.status(404).json("Post not found");

    //si existe la propiedad public_id se elimina la imagen junto con la publicacion
    if(deletePost.image.public_id){
    await deleteImage(deletePost.image.public_id)
    }

    return res.status(204).json("deleted");
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findUnique = await Post.findById(id);

    if (!findUnique) return res.status(404).json("Post not found");

    return res.status(200).json(findUnique);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};
