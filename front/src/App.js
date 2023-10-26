import { PostProvider} from './context/postContext'
import {Home, PostForm, NotFound} from './pages/index'
import {Toaster} from 'react-hot-toast'


import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
     <div className='px-10 container m-auto'>
     <PostProvider>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<PostForm/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
     </PostProvider>
     </div>
    </div>
  )
}
export default App