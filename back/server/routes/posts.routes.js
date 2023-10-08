import { Router } from "express";
import { createPost, deletePost, editPost, getAllPosts, getOnePost } from "../controllers/posts.controllers.js";

const router = Router();

router.get('/posts', getAllPosts)

router.post('/posts', createPost)

router.get('/posts/:id', getOnePost)

router.put('/posts/:id', editPost)

router.delete('/posts/:id', deletePost)

export default router;