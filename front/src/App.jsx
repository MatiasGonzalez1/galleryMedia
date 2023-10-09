import './App.css'
import {HomePage, NotFound, PostForm} from './pages/index.js';

import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route exact={true} path="/new" element={<PostForm />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

)
}

export default App
