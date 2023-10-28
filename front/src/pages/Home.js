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
      <header className="flex justify-between
       py-4">
        <h1 className="text-2xl text-gray-300 font-bold">Total de publicaciones: ({posts.length})</h1> 
        <div className='bg-red-500 hover:bg-red-400 px-3 py-2 w-2/12 text-sm text-white rounded-sm mx-2 text-center mb-4'>
     
     <Link to='/new' >Create New Post</Link>
     </div>
        </header>
    
     
      <div className="grid grid-cols-3 gap-2">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
      </div>
   </div>
  ) 
}
