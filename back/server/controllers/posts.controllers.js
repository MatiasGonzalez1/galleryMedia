import { uploadImage } from "../libs/cloudinary.js";
import Post from "../models/Post.js";

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
    
    const img = req.files.image;

    if(img){
      const result = await uploadImage(img.tempFilePath)
      console.log(result)
    }

    const createPost = new Post({
      title,
      description,
    });
    await createPost.save();
    res.status(200).json(createPost);
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
