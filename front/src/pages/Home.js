import LoaderPost from "../components/LoaderPost"
import { usePosts } from "../context/postContext"
import {Link} from 'react-router-dom'


export function Home() {
  
  const {posts} = usePosts([])
  const allPosts = posts.data
 
  //validación en el caso de que no hayan posts
  if(!allPosts) return <LoaderPost/>;
  return (
    <div className="text-white">
     
     <Link to='/new'>Create New Post</Link>
     
      {allPosts?.map(post => (
        <div key={post._id}>
          {post.title}
          <p>{post.description}</p>
        </div>
      ))}
   </div>
  ) 
}
