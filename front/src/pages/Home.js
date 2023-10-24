import { useEffect } from "react"
import { usePosts } from "../context/postContext"


export function Home() {
  
  const {getPosts, posts} = usePosts([])
  const allPosts = posts.data
  useEffect(()=>{
    getPosts();
  },[])

  return (
    <div className="text-white">
      {allPosts?.map(post => (
        <div key={post._id}>
          {post.title}
          <p>{post.description}</p>
        </div>
      ))}
   </div>
  ) 
}
