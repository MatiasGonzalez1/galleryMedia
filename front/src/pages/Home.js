import LoaderPost from "../components/LoaderPost"
import { usePosts } from "../context/postContext"
import {Link} from 'react-router-dom'
import { PostCard } from "../components/PostCard"

export function Home() {
  
  const {posts} = usePosts([])
  // const allPosts = posts.data
 
  //validación en el caso de que no hayan posts
  if(!posts) return <LoaderPost/>;
  return (
    <div className="text-white">
     
     <Link to='/new'>Create New Post</Link>
     
      <div className="grid grid-cols-3 gap-2">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
      </div>
   </div>
  ) 
}
