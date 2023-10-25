import {useState, createContext, useContext, useEffect} from 'react';

import { createPostRequest, getPostsRequests } from '../api/posts';


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
    const res = await createPostRequest(post)
    setPosts({data:res.data, ...posts})
    console.log(res)
  }

  useEffect(()=>{
    getPosts();
  },[])
  
  return <postContext.Provider value={
    {
      posts,
      getPosts,
      createPost
    }
  }>
    {children}
  </postContext.Provider>
}