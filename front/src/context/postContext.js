import {useState, createContext, useContext, useEffect} from 'react';

import { createPostRequest, deletePostRequest, getPostRequest, getPostsRequests, updatePostRequest } from '../api/posts';


const postContext = createContext()


export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export const PostProvider = ({children}) =>{
  const [posts, setPosts] = useState([])

  //llamada al backend para traer los posts
  const getPosts = async () => {
   const res = await getPostsRequests()
    setPosts(res.data)
  }

  //creacion de posts

  const createPost = async (post)=>{
    try {
      const res = await createPostRequest(post)
 
    setPosts([...posts, res.data])
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async (id) => {
    const res = await deletePostRequest(id)
    if(res.status === 204){
    setPosts(posts.filter(post => post._id !== id))}
  }

  const getPost = async (id) => {
    const res = await getPostRequest(id)
    return res.data
  }

  const updatePost = async (id, post) =>{
    const res = await updatePostRequest(id, post)
    setPosts(posts.map(post=>post._id === id ? res.data : post))
  }

  useEffect(()=>{
    getPosts();
  },[])
  
  return <postContext.Provider value={
    {
      posts,
      getPosts,
      createPost,
      deletePost,
      getPost,
      updatePost
    }
  }>
    {children}
  </postContext.Provider>
}